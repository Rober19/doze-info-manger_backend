import { Router } from 'express';
import { Create, FindAll, FindOne, DeleteOne, UpdateOne } from './member.controller';
import { Member_joi_body, Member_joi_params } from './member.model';
import { celebrate } from 'celebrate';

export default class MemberRoutes {
  constructor(app: Router) {
    this.routes(app);
  }

  routes(app: Router) {
    app.get('/members', FindAll);
    app.post('/member', celebrate({ body: Member_joi_body }), Create);
    app.get('/member', celebrate({ query: Member_joi_params }), FindOne);
    app.put(
      '/member',
      celebrate({ body: Member_joi_body, query: Member_joi_params }),
      UpdateOne,
    );
    app.delete('/member', celebrate({ query: Member_joi_params }), DeleteOne);
  }
}
