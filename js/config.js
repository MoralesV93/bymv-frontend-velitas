/**
 * ============================================
 * VELITAS ESTATE - SITE CONFIGURATION
 * ============================================
 * Edit this file to change all text content,
 * images, and settings across the website.
 * ============================================
 */

const CONFIG = {

    // ==========================================
    // BUSINESS INFORMATION
    // ==========================================
    business: {
        name: "Velitas Estate",
        tagline: "Two Venues, Countless Memories",
        foundedYear: 1987,
        phone: "+1 (555) 123-4567",
        email: "hello@velitasestate.com",
        address: "123 Estate Avenue, City",
        phoneLabel: "Call Us",
        emailLabel: "Email",
        addressLabel: "Location",
    },

    // ==========================================
    // NAVIGATION
    // ==========================================
    navigation: {
        links: [
            { text: "Our Venues", href: "#venues" },
            { text: "Occasions", href: "#occasions" },
            { text: "Gallery", href: "#gallery" },
        ],
        ctaText: "Book Now",
        ctaHref: "#booking",
    },

    // ==========================================
    // HERO SECTION
    // ==========================================
    hero: {
        subtitle: "Two Venues, Countless Memories",
        title: "Where Your Most Precious Moments Come to Life",
        description: "From our elegant Grand Hall to our enchanting Garden Terrace, discover two extraordinary venues designed to make your celebrations unforgettable.",
        primaryButton: {
            text: "Check Availability",
            href: "#booking",
        },
        secondaryButton: {
            text: "Explore Our Venues",
            href: "#venues",
        },
        scrollText: "Scroll",
        backgroundImage: "images/hero-bg.jpg",
        backgroundImageFallback: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1920&q=80",
    },

    // ==========================================
    // VENUES SECTION
    // ==========================================
    venues: {
        sectionTitle: "Our Venues",
        sectionDescription: "Two distinct spaces, each with its own character and charm, ready to host your most cherished celebrations.",
        bestForLabel: "Best For",

        items: [
            {
                id: "grand-hall",
                name: "The Grand Hall",
                badge: "Signature Venue",
                description: "An opulent indoor space featuring crystal chandeliers, soaring ceilings, and timeless elegance perfect for sophisticated celebrations.",
                image: "images/venue-grand-hall.jpg",
                imageFallback: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
                imageAlt: "The Grand Hall - Elegant indoor venue",
                features: [
                    { icon: "capacity", text: "Up to 250 guests" },
                    { icon: "wifi", text: "High-Speed WiFi" },
                    { icon: "kitchen", text: "Full Kitchen" },
                    { icon: "climate", text: "Climate Control" },
                ],
                bestFor: ["Grand Weddings", "Galas", "Corporate Events"],
            },
            {
                id: "garden-terrace",
                name: "The Garden Terrace",
                badge: "Natural Beauty",
                description: "A breathtaking outdoor haven surrounded by lush gardens, string lights, and natural beauty for romantic and intimate gatherings.",
                image: "images/venue-garden-terrace.jpg",
                imageFallback: "https://images.unsplash.com/photo-1510076857177-7470076d4098?w=800&q=80",
                imageAlt: "The Garden Terrace - Beautiful outdoor venue",
                features: [
                    { icon: "capacity", text: "Up to 150 guests" },
                    { icon: "pavilion", text: "Covered Pavilion" },
                    { icon: "garden", text: "Scenic Gardens" },
                    { icon: "lighting", text: "String Lighting" },
                ],
                bestFor: ["Garden Weddings", "Communions", "Intimate Parties"],
            },
        ],
    },

    // ==========================================
    // EVENTS SECTION
    // ==========================================
    events: {
        sectionTitle: "Events We Host",
        sectionDescription: "From life's biggest milestones to intimate gatherings, we bring expertise and passion to every occasion.",

        items: [
            {
                id: "weddings",
                title: "Weddings",
                description: "Your perfect day, beautifully realized in every detail.",
                icon: "wedding",
            },
            {
                id: "communions",
                title: "Communions",
                description: "Celebrate faith and family in an elegant setting.",
                icon: "communion",
            },
            {
                id: "birthdays",
                title: "Birthdays",
                description: "Make milestone moments truly unforgettable.",
                icon: "birthday",
            },
            {
                id: "corporate",
                title: "Corporate Events",
                description: "Professional spaces that impress and inspire.",
                icon: "corporate",
            },
        ],
    },

    // ==========================================
    // GALLERY SECTION
    // ==========================================
    gallery: {
        sectionTitle: "Captured Moments",
        sectionDescription: "A glimpse into the celebrations we've had the honor to host.",

        images: [
            {
                src: "images/gallery-1.jpg",
                fallback: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
                alt: "Elegant table setting",
            },
            {
                src: "images/gallery-2.jpg",
                fallback: "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=600&q=80",
                alt: "Wedding ceremony",
            },
            {
                src: "images/gallery-3.jpg",
                fallback: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80",
                alt: "Celebration balloons",
            },
            {
                src: "images/gallery-4.jpg",
                fallback: "https://images.unsplash.com/photo-1470217957101-da7150b9b681?w=600&q=80",
                alt: "Garden venue lighting",
            },
            {
                src: "images/gallery-5.jpg",
                fallback: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=600&q=80",
                alt: "Floral arrangements",
            },
        ],
    },

    // ==========================================
    // BOOKING SECTION
    // ==========================================
    booking: {
        title: "Let's Plan Your Perfect Event",
        description: "Ready to turn your vision into reality? Get in touch with our team and let's start creating something beautiful together.",

        form: {
            title: "Request Information",
            submitText: "Send Inquiry",
            submittingText: "Sending...",
            successText: "Message Sent!",

            fields: {
                name: {
                    label: "Your Name",
                    placeholder: "John & Jane Doe",
                },
                email: {
                    label: "Email Address",
                    placeholder: "hello@email.com",
                },
                eventType: {
                    label: "Event Type",
                    placeholder: "Select an occasion",
                    options: [
                        { value: "wedding", label: "Wedding" },
                        { value: "communion", label: "Communion" },
                        { value: "birthday", label: "Birthday Celebration" },
                        { value: "corporate", label: "Corporate Event" },
                        { value: "other", label: "Other" },
                    ],
                },
                date: {
                    label: "Preferred Date",
                },
                message: {
                    label: "Tell Us About Your Event",
                    placeholder: "Share your vision, guest count, and any special requirements...",
                },
            },
        },
    },

    // ==========================================
    // FOOTER
    // ==========================================
    footer: {
        description: "Creating unforgettable moments in our family-owned venues since 1987. Two beautiful spaces, one commitment to excellence.",

        socialLinks: [
            { platform: "facebook", url: "#", label: "Facebook" },
            { platform: "instagram", url: "#", label: "Instagram" },
            { platform: "pinterest", url: "#", label: "Pinterest" },
        ],

        columns: [
            {
                title: "Quick Links",
                links: [
                    { text: "Our Venues", href: "#venues" },
                    { text: "Occasions", href: "#occasions" },
                    { text: "Gallery", href: "#gallery" },
                    { text: "Book Now", href: "#booking" },
                ],
            },
            {
                title: "Our Venues",
                links: [
                    { text: "The Grand Hall", href: "#venues" },
                    { text: "Garden Terrace", href: "#venues" },
                    { text: "Virtual Tour", href: "#booking" },
                    { text: "Availability", href: "#booking" },
                ],
            },
            {
                title: "Contact",
                links: [
                    { text: "+1 (555) 123-4567", href: "tel:+15551234567" },
                    { text: "hello@velitasestate.com", href: "mailto:hello@velitasestate.com" },
                    { text: "123 Estate Avenue", href: "#booking" },
                    { text: "Schedule a Visit", href: "#booking" },
                ],
            },
        ],

        copyright: "© 2026 Velitas Estate. All rights reserved.",
        familyBadge: "Family Owned Since 1987",
    },

    // ==========================================
    // SEO & META
    // ==========================================
    meta: {
        title: "Velitas Estate | Two Venues, Countless Memories",
        description: "Discover two extraordinary event venues for weddings, communions, and private celebrations. Family-owned since 1987.",
    },
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
