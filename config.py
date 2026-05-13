from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    database_url: str = "postgresql://gamify:gem@localhost:5432/gamify_db"
    secret_key: str = "change-this-in-production"
    algorithm: str = "HS256"
    access_token_expire_minutes: int = 30
    refresh_token_expire_days: int = 7
    app_name: str = "Gamify"
    version: str = "2.0.0"

    class Config:
        env_file = ".env"

settings = Settings()
