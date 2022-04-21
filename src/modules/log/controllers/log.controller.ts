import { Controller, Get, Post } from '@nestjs/common';
import { LogService } from '../services/log.service';

@Controller('log')
export class LogController {
  constructor(private readonly logService: LogService) {}

  @Post()
  async testCreate() {
    for (let i = 0; i <= 1000000; i++) {
      await this.logService.testCreate({
        title: 'test',
        data: {
          id: i,
          guid: '82194eba-2184-47bf-94ee-f1e013803b84',
          isActive: false,
          balance: '$1,898.29',
          value: Math.random() * 5000,
          picture: 'http://placehold.it/32x32',
          age: 24,
          eyeColor: 'brown',
          name: 'Vonda Richard',
          gender: 'female',
          company: 'QIMONK',
          email: 'vondarichard@qimonk.com',
          phone: '+1 (844) 504-2385',
          address: '560 Porter Avenue, Blackgum, New York, 9446',
          about:
            'Esse magna nisi sunt consequat ad veniam ut adipisicing sunt. Do exercitation nulla anim consequat sunt elit deserunt amet commodo aliqua. Qui quis magna sit ad. Consequat cillum in anim anim do laboris anim incididunt reprehenderit. Sint aliquip anim adipisicing exercitation nulla do laboris culpa deserunt labore ullamco nisi. Id duis veniam laborum officia elit laborum nostrud incididunt magna dolor ullamco voluptate.\r\n',
          registered: '2022-04-12T03:47:55 +03:00',
          latitude: 87.209215,
          longitude: -1.542743,
          tags: ['proident', 'non', 'exercitation', 'qui', 'ad', 'eu', 'velit'],
          friends: [
            {
              id: 0,
              name: 'Barrera Pearson',
            },
            {
              id: 1,
              name: 'Wilda Fitzpatrick',
            },
            {
              id: 2,
              name: 'Nelson Rivers',
            },
          ],
          greeting: 'Hello, Vonda Richard! You have 1 unread messages.',
          favoriteFruit: 'apple',
        },
      });
    }
    return;
  }

  @Get()
  testFindAll() {
    return this.logService.testFindAll();
  }
}
