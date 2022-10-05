import {
    CollectionTypeSchema,
    StringAttribute,
    RequiredAttribute,


    DefaultTo,
    RelationAttribute,
    DateTimeAttribute,
    PrivateAttribute,
    UniqueAttribute,

    EnumerationAttribute,

    MediaAttribute,
    RichTextAttribute,
    BigIntegerAttribute,
    UIDAttribute,
    TextAttribute,
} from '@strapi/strapi';


export interface ApiArticleArticle extends CollectionTypeSchema {
    info: {
        singularName: 'article';
        pluralName: 'articles';
        displayName: 'Article';
        description: '';
    };
    options: {
        draftAndPublish: false;
    };
    attributes: {
        owner: RelationAttribute<
            'api::article.article',
            'oneToOne',
            'plugin::users-permissions.user'
            >;
        title: StringAttribute & RequiredAttribute;
        body: RichTextAttribute & RequiredAttribute;
        cover: MediaAttribute & RequiredAttribute;
        visits: BigIntegerAttribute & DefaultTo<'0'>;
        slug: UIDAttribute<'api::article.article', 'title'> & RequiredAttribute;
        createdAt: DateTimeAttribute;
        updatedAt: DateTimeAttribute;
        createdBy: RelationAttribute<
            'api::article.article',
            'oneToOne',
            'admin::user'
            > &
            PrivateAttribute;
        updatedBy: RelationAttribute<
            'api::article.article',
            'oneToOne',
            'admin::user'
            > &
            PrivateAttribute;
    };
}

export interface ApiAssetAsset extends CollectionTypeSchema {
    info: {
        singularName: 'asset';
        pluralName: 'assets';
        displayName: 'asset';
        description: '';
    };
    options: {
        draftAndPublish: false;
    };
    attributes: {
        owner: RelationAttribute<
            'api::asset.asset',
            'oneToOne',
            'plugin::users-permissions.user'
            >;
        coin_type: EnumerationAttribute<['btc', 'eth', 'thr']> & RequiredAttribute;
        type: EnumerationAttribute<['charge', 'withdraw']> & RequiredAttribute;
        amount: BigIntegerAttribute & RequiredAttribute;
        createdAt: DateTimeAttribute;
        updatedAt: DateTimeAttribute;
        createdBy: RelationAttribute<
            'api::asset.asset',
            'oneToOne',
            'admin::user'
            > &
            PrivateAttribute;
        updatedBy: RelationAttribute<
            'api::asset.asset',
            'oneToOne',
            'admin::user'
            > &
            PrivateAttribute;
    };
}

export interface ApiCardCard extends CollectionTypeSchema {
    info: {
        singularName: 'card';
        pluralName: 'cards';
        displayName: 'cards';
        description: '';
    };
    options: {
        draftAndPublish: false;
    };
    attributes: {
        bankName: StringAttribute & RequiredAttribute;
        cardNumber: StringAttribute & RequiredAttribute & UniqueAttribute;
        expireDate: StringAttribute & RequiredAttribute;
        ownerName: StringAttribute & RequiredAttribute;
        owner: RelationAttribute<
            'api::card.card',
            'oneToOne',
            'plugin::users-permissions.user'
            >;
        createdAt: DateTimeAttribute;
        updatedAt: DateTimeAttribute;
        createdBy: RelationAttribute<'api::card.card', 'oneToOne', 'admin::user'> &
            PrivateAttribute;
        updatedBy: RelationAttribute<'api::card.card', 'oneToOne', 'admin::user'> &
            PrivateAttribute;
    };
}

export interface ApiCategoryCategory extends CollectionTypeSchema {
    info: {
        singularName: 'category';
        pluralName: 'categories';
        displayName: 'categories';
        description: '';
    };
    options: {
        draftAndPublish: true;
    };
    attributes: {
        name: StringAttribute & RequiredAttribute;
        products: RelationAttribute<
            'api::category.category',
            'oneToMany',
            'api::product.product'
            >;
        owner: RelationAttribute<
            'api::category.category',
            'oneToOne',
            'plugin::users-permissions.user'
            >;
        createdAt: DateTimeAttribute;
        updatedAt: DateTimeAttribute;
        publishedAt: DateTimeAttribute;
        createdBy: RelationAttribute<
            'api::category.category',
            'oneToOne',
            'admin::user'
            > &
            PrivateAttribute;
        updatedBy: RelationAttribute<
            'api::category.category',
            'oneToOne',
            'admin::user'
            > &
            PrivateAttribute;
    };
}


export interface ApiCreditCredit extends CollectionTypeSchema {
    info: {
        singularName: 'credit';
        pluralName: 'credits';
        displayName: 'credit';
        description: '';
    };
    options: {
        draftAndPublish: true;
    };
    attributes: {
        type: EnumerationAttribute<['withdraw', 'charge']> & RequiredAttribute;
        amount: BigIntegerAttribute & RequiredAttribute;
        owner: RelationAttribute<
            'api::credit.credit',
            'oneToOne',
            'plugin::users-permissions.user'
            >;
        createdAt: DateTimeAttribute;
        updatedAt: DateTimeAttribute;
        publishedAt: DateTimeAttribute;
        createdBy: RelationAttribute<
            'api::credit.credit',
            'oneToOne',
            'admin::user'
            > &
            PrivateAttribute;
        updatedBy: RelationAttribute<
            'api::credit.credit',
            'oneToOne',
            'admin::user'
            > &
            PrivateAttribute;
    };
}

export interface ApiProductProduct extends CollectionTypeSchema {
    info: {
        singularName: 'product';
        pluralName: 'products';
        displayName: 'Product';
        description: '';
    };
    options: {
        draftAndPublish: false;
    };
    attributes: {
        name: StringAttribute & RequiredAttribute;
        owner: RelationAttribute<
            'api::product.product',
            'oneToOne',
            'plugin::users-permissions.user'
            >;
        description: RichTextAttribute & RequiredAttribute;
        category: RelationAttribute<
            'api::product.product',
            'manyToOne',
            'api::category.category'
            >;
        shortDescription: TextAttribute & RequiredAttribute;
        price: BigIntegerAttribute & RequiredAttribute;
        images: MediaAttribute & RequiredAttribute;
        createdAt: DateTimeAttribute;
        updatedAt: DateTimeAttribute;
        createdBy: RelationAttribute<
            'api::product.product',
            'oneToOne',
            'admin::user'
            > &
            PrivateAttribute;
        updatedBy: RelationAttribute<
            'api::product.product',
            'oneToOne',
            'admin::user'
            > &
            PrivateAttribute;
    };
}


