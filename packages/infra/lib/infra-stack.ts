import * as cdk from "aws-cdk-lib";

import { Construct } from "constructs";

import { Amplify } from "./NestedStacks/Amplify/Amplify";
import { Storage } from "./NestedStacks/Storage/Storage";

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    /********************************************************************/
    /***************************** Storage ******************************/
    /********************************************************************/

    const { amplifyStagingBucket } = new Storage(this, "Storage");

    /********************************************************************/
    /***************************** Amplify ******************************/
    /********************************************************************/

    new Amplify(this, "Amplify", { amplifyStagingBucket });
  }
}
