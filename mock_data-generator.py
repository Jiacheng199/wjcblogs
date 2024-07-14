import boto3
import os
from dotenv import load_dotenv
from datetime import datetime

#load .env
load_dotenv()

#Connect to DynamoDB and select the Table
dynamodb = boto3.resource("dynamodb",
    aws_access_key_id=os.getenv('IAM_KEY'),
    aws_secret_access_key=os.getenv('IAM_SECRET'),
    region_name=os.getenv('AWS_REGION'))

table = dynamodb.Table('Blogs')

blogs = [
    {
        'BlogID': '1',
        'Title': 'First Blog Post',
        'Content': 'This is the content of the first blog post.',
        'Author': 'John Doe',
        'CreatedAt': datetime.utcnow().isoformat(),
        'Tags': ['Introduction', 'First Post'],
        'Category': 'General'
    },
    {
        'BlogID': '2',
        'Title': 'Second Blog Post',
        'Content': 'This is the content of the second blog post.',
        'Author': 'Jane Smith',
        'CreatedAt': datetime.utcnow().isoformat(),
        'Tags': ['Follow Up', 'Second Post'],
        'Category': 'General'
    }
]

with table.batch_writer() as batch:
    for blog in blogs:
        batch.put_item(Item=blog)

print("Blogs added successfully!")

# dynamodb = boto3.resource('dynamodb')
# table_name = 'Blogs'
# table = dynamodb.Table(table_name)

# print(table)