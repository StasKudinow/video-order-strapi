import type { Schema, Struct } from '@strapi/strapi';

export interface ContactsContacts extends Struct.ComponentSchema {
  collectionName: 'components_contacts_contacts';
  info: {
    displayName: 'contacts';
  };
  attributes: {
    email: Schema.Attribute.Email;
    owner: Schema.Attribute.String;
    telegram: Schema.Attribute.String;
    youtube: Schema.Attribute.String;
  };
}

export interface FaqItem extends Struct.ComponentSchema {
  collectionName: 'components_faq_items';
  info: {
    displayName: 'item';
  };
  attributes: {
    answer: Schema.Attribute.String & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FormRequestForm extends Struct.ComponentSchema {
  collectionName: 'components_form_request_forms';
  info: {
    displayName: 'form';
  };
  attributes: {
    buttonCaption: Schema.Attribute.Text;
    buttonText: Schema.Attribute.String & Schema.Attribute.Required;
    consentCaption: Schema.Attribute.Text;
    description: Schema.Attribute.Text;
    emailLabel: Schema.Attribute.String & Schema.Attribute.Required;
    priceLabel: Schema.Attribute.String & Schema.Attribute.Required;
    priceValue: Schema.Attribute.BigInteger & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HeroHero extends Struct.ComponentSchema {
  collectionName: 'components_hero_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    description: Schema.Attribute.Blocks & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface OfferDetails extends Struct.ComponentSchema {
  collectionName: 'components_offer_details';
  info: {
    displayName: 'details';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface OfferOffer extends Struct.ComponentSchema {
  collectionName: 'components_offer_offers';
  info: {
    displayName: 'offer';
  };
  attributes: {
    description: Schema.Attribute.Text;
    details: Schema.Attribute.Component<'offer.details', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface VideoVideo extends Struct.ComponentSchema {
  collectionName: 'components_video_videos';
  info: {
    displayName: 'video';
  };
  attributes: {
    poster: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    video: Schema.Attribute.Media<'videos'> & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'contacts.contacts': ContactsContacts;
      'faq.item': FaqItem;
      'form.request-form': FormRequestForm;
      'hero.hero': HeroHero;
      'offer.details': OfferDetails;
      'offer.offer': OfferOffer;
      'video.video': VideoVideo;
    }
  }
}
