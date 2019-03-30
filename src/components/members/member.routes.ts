import { Router } from 'express';
import { Create, FindAll, FindOne } from './member.controller';
import { Member_joi_body, Member_joi_params } from './member.model';
import { celebrate, Joi } from 'celebrate';

export default class MemberRoutes {
  constructor(app: Router) {
    this.routes(app);
  }

  routes(app: Router) {
    app.get('/member', FindAll);
    app.post('/member', celebrate({ body: Member_joi_body }), Create);
    app.get('/member/:id', celebrate({ params: Member_joi_params }), FindOne);
    app.put('/member/:id', celebrate({ body: Member_joi_body, params: Member_joi_params }), FindOne);
    app.delete('/member/:id', celebrate({ params: Member_joi_params }), FindOne);

  }
}
