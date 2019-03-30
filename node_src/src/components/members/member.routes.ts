import { Router } from 'express';
import { Create, FindAll, FindOne } from './member.controller';
import { Member_Joi } from './member.model';
import { celebrate } from 'celebrate';

export default class MemberRoutes {
  constructor(app: Router) {
    this.routes(app);
  }

  routes(app: Router) {
    app.get('/member', FindAll);
    app.get('/member/:id', FindOne);
    app.post('/member', celebrate({ body: Member_Joi }), Create);
  }
}
