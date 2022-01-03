import OmedaIdentityX from '@parameter1/base-cms-marko-web-omeda-identity-x/browser';

const CommentToggleButton = () => import(/* webpackChunkName: "theme-comment-toggle-button" */ './comment-toggle-button.vue');
const IdentityXLogin = () => import(/* webpackChunkName: "theme-identity-x-login" */ './identity-x/comments/login.vue');
const IdentityXCommentStream = () => import(/* webpackChunkName: "theme-identity-x-comment-stream" */ './identity-x/comments/stream.vue');

const setP1EventsIdentity = ({ p1events, brandKey, encryptedId }) => {
  if (!p1events || !brandKey || !encryptedId) return;
  p1events('setIdentity', `omeda.${brandKey}.customer*${encryptedId}~encrypted`);
};

export default (Browser) => {
  const { EventBus } = Browser;

  EventBus.$on('identity-x-logout', () => {
    if (window.p1events) window.p1events('setIdentity', null);
  });
  EventBus.$on('omeda-identity-x-authenticated', ({ brandKey, encryptedId }) => {
    setP1EventsIdentity({ p1events: window.p1events, brandKey, encryptedId });
  });
  EventBus.$on('omeda-identity-x-rapid-identify-response', ({ brandKey, encryptedId }) => {
    setP1EventsIdentity({ p1events: window.p1events, brandKey, encryptedId });
  });

  OmedaIdentityX(Browser, {
    LoginComponent: IdentityXLogin,
    CustomCommentStreamComponent: IdentityXCommentStream,
  });

  Browser.register('ThemeCommentToggleButton', CommentToggleButton);
};
