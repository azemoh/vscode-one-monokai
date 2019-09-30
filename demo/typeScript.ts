'use strict';

import graph, { FacebookUser } from 'fbgraph';
import { Response, Request, NextFunction } from 'express';


/**
 * GET /api
 * List of API examples.
 */
export const getApi = (req: Request, res: Response) => {
  res.render('api/index', {
    title: 'API Examples'
  });
};

/**
 * GET /api/facebook
 * Facebook API example.
 */
export const getFacebook = (req: Request, res: Response, next: NextFunction) => {
  const token = req.user.tokens.find((token: any) => token.kind === 'facebook');  
  const scope = `${req.user.facebook}?fields=id,name,email,first_name,last_name,gender`;
  const scope = `${req}?fields=id,name,email,first_name,last_name,gender`;

  graph.setAccessToken(token.accessToken);
  graph.get(scope, (err: Error, results: FacebookUser) => {
    if (err) { return next(err); }

    res.render('api/facebook', {
      title: 'Facebook API',
      profile: results
    });
  });
};
