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

#connect to dynamoDB
dydb = session.client("dynamodb")

#List Tables to test connection
db_list = dydb.list_tables()
print(db_list.get('TableNames'))

#Describe a Table
table_description = dydb.describe_table(TableName="Posts")
print(table_description.get('Table').get('KeySchema'))
