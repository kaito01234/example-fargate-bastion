# Fargate Bastion Server Sample

[![Open in Dev Containers](https://img.shields.io/static/v1?label=Dev%20Containers&message=Open&color=blue&logo=visualstudiocode)](https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/kaito01234/fargate-bastion-sample)

## Setup

- `npx cdk deploy FargateBastionSampleStack`

## Push bastion image

- Set aws account id

```bash
AWS_ACCOUNT_ID=xxxxxxxxxxxx
```

- Push image

```bash
cd containerImage/bastion/
aws ecr get-login-password --region ap-northeast-1 | docker login --username AWS --password-stdin $AWS_ACCOUNT_ID.dkr.ecr.ap-northeast-1.amazonaws.com
docker build -t bastion:latest .
docker tag bastion:latest $AWS_ACCOUNT_ID.dkr.ecr.ap-northeast-1.amazonaws.com/bastion:latest
docker push $AWS_ACCOUNT_ID.dkr.ecr.ap-northeast-1.amazonaws.com/bastion:latest
```

## Setting shell

Please set values in bastion.sh.

- `SUBNET_NAME`: Your PrivateSubnet name.
