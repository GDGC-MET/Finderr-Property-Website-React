import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@mdi/font/css/materialdesignicons.min.css';
import './PricingSection.css';

const PricingSection = () => {
    return (
        <section className="section" id="pricing">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title-box text-center">
                            <h3 className="title-heading mt-4">Best Pricing Package</h3>
                            <p className="text-muted f-17 mt-3">
                                Get premium benefits with these plans
                            </p>
                            <img src="images/home-border.png" height="15" className="mt-3" alt="" />
                        </div>
                    </div>
                </div>

                <div className="row mt-5 pt-4">
                    <PricingCard 
                        iconClass="mdi mdi-account h1"
                        title="Starter"
                        features={[
                            { text: 'Feature 1', isAvailable: true },
                            { text: 'Feature 2', isAvailable: true },
                            { text: 'Feature 3', isAvailable: false },
                            { text: 'Feature 4', isAvailable: false },
                        ]}
                        description="Semper urna veal tempus pharetra elit habisse platea dictumst."
                        oldPrice="$9.99"
                        newPrice="$8.99"
                    />

                    <PricingCard 
                        iconClass="mdi mdi-account-multiple h1 text-primary"
                        title="Personal"
                        features={[
                            { text: 'Unlimited Target Audience', isAvailable: true },
                            { text: '1 User Account', isAvailable: true },
                            { text: '100+ Video Tuts', isAvailable: true },
                            { text: 'Public Displays', isAvailable: false },
                        ]}
                        description="Semper urna veal tempus pharetra elit habisse platea dictumst."
                        oldPrice="$19.99"
                        newPrice="$18.99"
                        isFeatured
                    />

                    <PricingCard 
                        iconClass="mdi mdi-account-multiple-plus h1"
                        title="Ultimate"
                        features={[
                            { text: 'Unlimited Target Audience', isAvailable: true },
                            { text: '1 User Account', isAvailable: true },
                            { text: '100+ Video Tuts', isAvailable: true },
                            { text: 'Public Displays', isAvailable: true },
                        ]}
                        description="Semper urna veal tempus pharetra elit habisse platea dictumst."
                        oldPrice="$29.99"
                        newPrice="$28.99"
                    />
                </div>
            </div>
        </section>
    );
};

const PricingCard = ({ iconClass, title, features, description, oldPrice, newPrice, isFeatured }) => {
    return (
        <div className="col-lg-4">
            <div className="pricing-box mt-4">
                {isFeatured && (
                    <div className="pricing-badge">
                        <span className="badge">Featured</span>
                    </div>
                )}
                <i className={iconClass}></i>
                <h4 className="f-20">{title}</h4>
                <div className="mt-4 pt-2">
                    <p className="mb-2 f-18">Features</p>
                    {features.map((feature, index) => (
                        <p className="mb-2" key={index}>
                            <i className={`mdi ${feature.isAvailable ? 'mdi-checkbox-marked-circle text-success' : 'mdi-close-circle text-danger'} f-18 mr-2`}></i>
                            <b>{feature.isAvailable ? '✔️' : '❌'}</b> {feature.text}
                        </p>
                    ))}
                </div>
                <p className="mt-4 pt-2 text-muted">{description}</p>
                <div className="pricing-plan mt-4 pt-2">
                    <h4 className="text-muted">
                        <s>{oldPrice}</s> <span className="plan pl-3 text-dark">{newPrice}</span>
                    </h4>
                    <p className="text-muted mb-0">Per Month</p>
                </div>
                <div className="mt-4 pt-3">
                    <a href="" className="btn btn-primary btn-rounded">Purchase Now</a>
                </div>
            </div>
        </div>
    );
};

export default PricingSection;