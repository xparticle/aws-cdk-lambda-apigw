#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/cdk');
import { AwsCdkLambdaApigwStack } from '../lib/aws-cdk-lambda-apigw-stack';

const app = new cdk.App();
new AwsCdkLambdaApigwStack(app, 'AwsCdkLambdaApigwStack');
