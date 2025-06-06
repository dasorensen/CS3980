from typing import Annotated
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from passlib.context import CryptContext

from auth.jwt_auth import (
    LoginResult,
    Token,
    TokenData,
    create_access_token,
    decode_jwt_token,
)
from models.user import User, UserRequest

pwd_context = CryptContext(schemes=["bcrypt"])


class HashPassword:
    def create_hash(self, password: str):
        return pwd_context.hash(password)

    def verify_hash(self, input_password: str, hashed_password: str):
        return pwd_context.verify(input_password, hashed_password)


oauth2_scheme = OAuth2PasswordBearer(tokenUrl="users/sign-in")
hash_password = HashPassword()


def get_user(token: Annotated[str, Depends(oauth2_scheme)]) -> TokenData:
    return decode_jwt_token(token)


user_router = APIRouter()


@user_router.post("/signup")
async def sign_up(user: UserRequest):
    print("Got to signup")
    existing_user = await User.find_one(User.username == user.username)

    if existing_user:
        raise HTTPException(status_code=400, detail="User already exists.")

    hashed_pwd = hash_password.create_hash(password=user.password)
    new_user = User(username=user.username, password=hashed_pwd, email=user.email)
    await new_user.create()
    return {"message": "User created successfully."}


@user_router.post("/sign-in")
async def login_for_access_token(
    form_data: Annotated[OAuth2PasswordRequestForm, Depends()],
) -> LoginResult:
    ## Authenticate user by verifying the user in DB
    username = form_data.username
    existing_user = await User.find_one(User.username == username)
    if not existing_user:
        raise HTTPException(
            status_code=401,
            detail="Invalid username or password",
        )

    authenticated = hash_password.verify_hash(
        form_data.password, existing_user.password
    )
    if authenticated:
        access_token = create_access_token(
            {
                "username": username,
            }
        )
        return LoginResult(
            access_token=access_token,
            username=existing_user.username,
        )

    raise HTTPException(status_code=401, detail="Invalid username or password")
