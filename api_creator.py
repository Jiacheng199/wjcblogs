import boto3
import os
from dotenv import load_dotenv

#load .env
load_dotenv()

#Get AWS Access
aws_access_key_id = os.getenv('IAM_KEY')
aws_secret_access_key = os.getenv('IAM_SECRET')
region = os.getenv('AWS_REGION')
