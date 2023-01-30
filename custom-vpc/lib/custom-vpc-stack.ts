import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from "@aws-cdk/aws-ec2";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CustomVpcStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new ec2.Vpc(this, "Mycdkvpc");
  }
}
