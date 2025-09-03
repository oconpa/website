import * as cdk from "aws-cdk-lib";

import * as s3 from "aws-cdk-lib/aws-s3";

import { Construct } from "constructs";

export class Storage extends Construct {
  readonly amplifyStagingBucket: s3.Bucket;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    this.amplifyStagingBucket = new s3.Bucket(this, "Amplify Staging Bucket", {
      objectOwnership: s3.ObjectOwnership.OBJECT_WRITER,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
      enforceSSL: true,
    });
  }
}
