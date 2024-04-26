import { Construct } from 'constructs';

import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';

import { Bastion } from './resource/bastion';

export class FargateBastionSampleStack extends cdk.Stack {
  /**
   * Bastion作成
   * @param {Construct} scope コンストラクト
   * @param {string} id スタック名
   * @param {ResourceProps} props 設定
   */
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // 既存のVPCを取得
    const vpc = ec2.Vpc.fromLookup(this, 'VPC', {
      vpcId: 'vpc-',
    });

    // Bastion
    new Bastion(this, `${id}-Bastion`, { ...props, vpc });
  }
}
