import boto3
import os
from dotenv import load_dotenv

#load .env
load_dotenv()

#Get AWS Access
aws_access_key_id = os.getenv('IAM_KEY')
aws_secret_access_key = os.getenv('IAM_SECRET')
region = os.getenv('AWS_REGION')

#Create Boto3 session
session = boto3.Session(
    aws_access_key_id=aws_access_key_id,
    aws_secret_access_key=aws_secret_access_key,
    region_name=region
)

#List Tables to test connection
db_list = session.client("dynamodb").list_tables()
print(db_list.get('TableNames'))



