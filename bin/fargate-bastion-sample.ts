#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { FargateBastionSampleStack } from '../lib/fargate-bastion-sample-stack';

const app = new cdk.App();

const env = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: 'ap-northeast-1',
};

new FargateBastionSampleStack(app, 'FargateBastionSampleStack', {
  env,
});
