//sample_cdk.ts
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import {VpcStack} from "../lib/custom-vpc-stack";

const app = new cdk.App();
new VpcStack(app, 'VpcStack')
app.synth();