import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class Transport {
  constructor(private readonly configService: ConfigService) {}
}
