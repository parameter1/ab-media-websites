<template>
  <div class="inline-newsletter-form">
    <div ref="lazyload" class="lazyload" />
    <div :class="blockName">
      <div v-if="!submitted" :class="`${blockName}__name`">
        {{ name }}
      </div>
      <div v-if="!submitted" :class="`${blockName}__description`" v-html="description" />
      <div :class="`${blockName}__form`">
        <login-form
          :additional-event-data="{ forceProfileReVerification: true }"
          :source="source"
          :active-user="activeUser"
          :endpoints="endpoints"
          :button-labels="buttonLabels"
          :redirect="redirect"
          :login-email-placeholder="loginEmailPlaceholder"
          :consent-policy="consentPolicy"
          :regional-consent-policies="regionalConsentPolicies"
          :app-context-id="appContextId"
          success-message-type="newsletter-signup"
          @login-link-sent="handleLoginLinkSent"
        />
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from '@parameter1/base-cms-marko-web-identity-x/browser/login.vue';


export default {
  components: {
    LoginForm,
  },

  props: {
    siteName: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    defaultNewsletter: {
      type: Object,
      required: true,
      validate: o => (o && o.name && o.deploymentTypeId),
    },
    newsletters: {
      type: Array,
      default: () => [],
    },
    demographic: {
      type: Object,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    imageSrc: {
      type: String,
      default: null,
    },
    imageSrcset: {
      type: String,
      default: null,
    },
    lang: {
      type: String,
      default: 'en',
    },
    // LOGIN FORM PROPS
    source: {
      type: String,
      default: 'login',
    },
    activeUser: {
      type: Object,
      default: () => {},
    },
    endpoints: {
      type: Object,
      required: true,
    },
    buttonLabels: {
      type: Object,
      default: () => ({
        continue: 'Continue',
        logout: 'Logout',
      }),
    },
    consentPolicy: {
      type: String,
      default: null,
    },
    redirect: {
      type: String,
      default: null,
    },
    appContextId: {
      type: String,
      default: null,
    },
    loginEmailPlaceholder: {
      type: String,
      default: null,
    },
    senderEmailAddress: {
      type: String,
      default: 'noreply@identity-x.parameter1.com',
    },
    additionalEventData: {
      type: Object,
      default: () => ({
        forceProfileReVerification: true,
      }),
    },
  },

  data: () => ({
    blockName: 'newsletter-signup-banner-large',
    didView: false,
    email: null,
    step: 1,
    submitted: false,
  }),

  watch: {
    didView(value) {
      if (value) this.$emit('view', { step: 1 });
    },
  },

  mounted() {
    this.$emit('load', { step: 1 });
    this.$refs.lazyload.addEventListener('lazybeforeunveil', () => {
      this.didView = true;
    });
  },

  methods: {
    handleLoginLinkSent() {
      this.submitted = true;
    },
  },
};
</script>
