/**
 * ============================================
 * VELITAS ESTATE - MAIN JAVASCRIPT
 * ============================================
 */

// ============================================
// SVG ICONS LIBRARY
// ============================================
const ICONS = {
    // Feature icons
    capacity: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
    </svg>`,
    wifi: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
    </svg>`,
    kitchen: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2.01L6 2c-1.1 0-2 .89-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.11-.9-1.99-2-1.99zM18 20H6v-9.02h12V20zm0-11H6V4h12v5z"/>
    </svg>`,
    climate: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 11h-4.17l3.24-3.24-1.41-1.42L15 11h-2V9l4.66-4.66-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93 6.34 4.34 11 9v2H9L4.34 6.34 2.93 7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41 1.42L9 13h2v2l-4.66 4.66 1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24 1.42-1.41L13 15v-2h2l4.66 4.66 1.41-1.42L17.83 13H22z"/>
    </svg>`,
    pavilion: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
    </svg>`,
    garden: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 22c4.97 0 9-4.03 9-9-4.97 0-9 4.03-9 9zM5.6 10.25c0 1.38 1.12 2.5 2.5 2.5.53 0 1.01-.16 1.42-.44l-.02.19c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5l-.02-.19c.4.28.89.44 1.42.44 1.38 0 2.5-1.12 2.5-2.5 0-1-.59-1.85-1.43-2.25.84-.4 1.43-1.25 1.43-2.25 0-1.38-1.12-2.5-2.5-2.5-.53 0-1.01.16-1.42.44l.02-.19C14.5 2.12 13.38 1 12 1S9.5 2.12 9.5 3.5l.02.19c-.4-.28-.89-.44-1.42-.44-1.38 0-2.5 1.12-2.5 2.5 0 1 .59 1.85 1.43 2.25-.84.4-1.43 1.25-1.43 2.25zM12 5.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8s1.12-2.5 2.5-2.5zM3 13c0 4.97 4.03 9 9 9 0-4.97-4.03-9-9-9z"/>
    </svg>`,
    lighting: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/>
    </svg>`,

    // Event icons
    wedding: `<svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 4h-1V2h-2v2H9V2H7v2H6c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-6 14c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm2.5-5c0 1.38-1.12 2.5-2.5 2.5S9.5 14.38 9.5 13s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5z"/>
    </svg>`,
    communion: `<svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>`,
    birthday: `<svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 6c1.11 0 2-.9 2-2 0-.38-.1-.73-.29-1.03L12 0l-1.71 2.97c-.19.3-.29.65-.29 1.03 0 1.1.9 2 2 2zm4.6 9.99l-1.07-1.07-1.08 1.07c-1.3 1.3-3.58 1.31-4.89 0l-1.07-1.07-1.09 1.07C6.75 16.64 5.88 17 4.96 17c-.73 0-1.4-.23-1.96-.61V21c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-4.61c-.56.38-1.23.61-1.96.61-.92 0-1.79-.36-2.44-1.01zM18 9h-5V7h-2v2H6c-1.66 0-3 1.34-3 3v1.54c0 1.08.88 1.96 1.96 1.96.52 0 1.02-.2 1.38-.57l2.14-2.13 2.13 2.13c.74.74 2.03.74 2.77 0l2.14-2.13 2.13 2.13c.37.37.86.57 1.38.57 1.08 0 1.96-.88 1.96-1.96V12C21 10.34 19.66 9 18 9z"/>
    </svg>`,
    corporate: `<svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
    </svg>`,

    // Contact icons
    phone: `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
    </svg>`,
    email: `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>`,
    location: `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>`,

    // Social icons
    facebook: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>`,
    instagram: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" stroke-width="2"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="none" stroke="currentColor" stroke-width="2"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" stroke-width="2"/>
    </svg>`,
    pinterest: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.4 0 0 5.4 0 12c0 5 3.1 9.3 7.5 11-.1-.9-.2-2.4 0-3.4.2-.9 1.5-6.4 1.5-6.4s-.4-.8-.4-1.9c0-1.8 1-3.1 2.3-3.1 1.1 0 1.6.8 1.6 1.8 0 1.1-.7 2.7-1.1 4.2-.3 1.3.6 2.3 1.9 2.3 2.3 0 4.1-2.4 4.1-5.9 0-3.1-2.2-5.2-5.4-5.2-3.7 0-5.8 2.7-5.8 5.6 0 1.1.4 2.3 1 2.9.1.1.1.2.1.4-.1.4-.3 1.3-.4 1.5-.1.2-.2.3-.4.2-1.5-.7-2.5-2.9-2.5-4.7 0-3.8 2.8-7.3 8-7.3 4.2 0 7.5 3 7.5 7 0 4.2-2.6 7.5-6.3 7.5-1.2 0-2.4-.6-2.8-1.4 0 0-.6 2.3-.7 2.9-.3 1-.9 2.1-1.4 2.8 1 .3 2.1.5 3.3.5 6.6 0 12-5.4 12-12S18.6 0 12 0z"/>
    </svg>`,

    // Misc icons
    heart: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>`,
    scrollDown: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 5v14M19 12l-7 7-7-7"/>
    </svg>`,
};

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Check if local image exists, fallback to URL
 */
function getImageSrc(localPath, fallbackUrl) {
    // In production, you'd check if local image exists
    // For now, we'll use a simple approach
    return fallbackUrl || localPath;
}

/**
 * Get icon SVG by name
 */
function getIcon(name) {
    return ICONS[name] || '';
}

// ============================================
// RENDER FUNCTIONS
// ============================================

/**
 * Render Navigation
 */
function renderNavigation() {
    const navMenu = document.getElementById('navMenu');
    if (!navMenu || !CONFIG.navigation) return;

    const linksHTML = CONFIG.navigation.links.map(link =>
        `<li><a href="${link.href}" class="nav-link">${link.text}</a></li>`
    ).join('');

    const ctaHTML = `
        <li class="nav-cta">
            <a href="${CONFIG.navigation.ctaHref}" class="btn btn-primary">${CONFIG.navigation.ctaText}</a>
        </li>
    `;

    navMenu.innerHTML = linksHTML + ctaHTML;
}

/**
 * Render Logo
 */
function renderLogo() {
    const logos = document.querySelectorAll('.logo');
    logos.forEach(logo => {
        logo.innerHTML = `
            <span class="logo-icon">${CONFIG.business.name.charAt(0)}</span>
            ${CONFIG.business.name}
        `;
    });
}

/**
 * Render Hero Section
 */
function renderHero() {
    const hero = document.getElementById('hero');
    if (!hero || !CONFIG.hero) return;

    const bgImage = getImageSrc(CONFIG.hero.backgroundImage, CONFIG.hero.backgroundImageFallback);

    hero.innerHTML = `
        <div class="hero-bg">
            <img src="${bgImage}" alt="Elegant event venue">
            <div class="hero-overlay"></div>
        </div>
        <div class="hero-content">
            <p class="hero-subtitle">${CONFIG.hero.subtitle}</p>
            <h1>${CONFIG.hero.title}</h1>
            <p class="hero-description">${CONFIG.hero.description}</p>
            <div class="hero-buttons">
                <a href="${CONFIG.hero.primaryButton.href}" class="btn btn-primary">${CONFIG.hero.primaryButton.text}</a>
                <a href="${CONFIG.hero.secondaryButton.href}" class="btn btn-secondary">${CONFIG.hero.secondaryButton.text}</a>
            </div>
        </div>
        <div class="scroll-indicator">
            <span>${CONFIG.hero.scrollText || 'Scroll'}</span>
            ${getIcon('scrollDown')}
        </div>
    `;
}

/**
 * Render Venues Section
 */
function renderVenues() {
    const venuesSection = document.getElementById('venues');
    if (!venuesSection || !CONFIG.venues) return;

    const header = document.querySelector('#venues .section-header');
    if (header) {
        header.innerHTML = `
            <h2>${CONFIG.venues.sectionTitle}</h2>
            <div class="accent-line"></div>
            <p>${CONFIG.venues.sectionDescription}</p>
        `;
    }

    const grid = document.querySelector('#venues .premises-grid');
    if (grid) {
        grid.innerHTML = CONFIG.venues.items.map(venue => {
            const image = getImageSrc(venue.image, venue.imageFallback);
            const features = venue.features.map(f => `
                <div class="feature-item">
                    <span class="feature-icon">${getIcon(f.icon)}</span>
                    <span>${f.text}</span>
                </div>
            `).join('');
            const tags = venue.bestFor.map(tag => `<span class="tag">${tag}</span>`).join('');

            return `
                <div class="premise-card" data-venue="${venue.id}">
                    <div class="premise-image">
                        <img src="${image}" alt="${venue.imageAlt}">
                        <span class="premise-badge">${venue.badge}</span>
                    </div>
                    <div class="premise-content">
                        <h3>${venue.name}</h3>
                        <p>${venue.description}</p>
                        <div class="premise-features">${features}</div>
                        <div class="best-for">
                            <p class="best-for-label">${CONFIG.venues.bestForLabel || 'Best For'}</p>
                            <div class="tags">${tags}</div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }
}

/**
 * Render Events Section
 */
function renderEvents() {
    const eventsSection = document.getElementById('occasions');
    if (!eventsSection || !CONFIG.events) return;

    const header = document.querySelector('#occasions .section-header');
    if (header) {
        header.innerHTML = `
            <h2>${CONFIG.events.sectionTitle}</h2>
            <div class="accent-line"></div>
            <p>${CONFIG.events.sectionDescription}</p>
        `;
    }

    const grid = document.querySelector('#occasions .events-grid');
    if (grid) {
        grid.innerHTML = CONFIG.events.items.map(event => `
            <div class="event-card" data-event="${event.id}">
                <div class="event-icon">${getIcon(event.icon)}</div>
                <div>
                    <h4>${event.title}</h4>
                    <p>${event.description}</p>
                </div>
            </div>
        `).join('');
    }
}

/**
 * Render Gallery Section
 */
function renderGallery() {
    const gallerySection = document.getElementById('gallery');
    if (!gallerySection || !CONFIG.gallery) return;

    const header = document.querySelector('#gallery .section-header');
    if (header) {
        header.innerHTML = `
            <h2>${CONFIG.gallery.sectionTitle}</h2>
            <div class="accent-line"></div>
            <p>${CONFIG.gallery.sectionDescription}</p>
        `;
    }

    const grid = document.querySelector('#gallery .gallery-grid');
    if (grid) {
        grid.innerHTML = CONFIG.gallery.images.map((img, index) => {
            const src = getImageSrc(img.src, img.fallback);
            return `
                <div class="gallery-item" data-index="${index}">
                    <img src="${src}" alt="${img.alt}">
                </div>
            `;
        }).join('');
    }
}

/**
 * Render Booking Section
 */
function renderBooking() {
    const bookingSection = document.getElementById('booking');
    if (!bookingSection || !CONFIG.booking) return;

    const infoSection = document.querySelector('#booking .booking-info');
    if (infoSection) {
        infoSection.innerHTML = `
            <h2>${CONFIG.booking.title}</h2>
            <p>${CONFIG.booking.description}</p>
            <div class="contact-details">
                <div class="contact-item">
                    <span class="contact-icon">${getIcon('phone')}</span>
                    <div class="contact-text">
                        <strong>${CONFIG.business.phoneLabel || 'Call Us'}</strong>
                        <span>${CONFIG.business.phone}</span>
                    </div>
                </div>
                <div class="contact-item">
                    <span class="contact-icon">${getIcon('email')}</span>
                    <div class="contact-text">
                        <strong>${CONFIG.business.emailLabel || 'Email'}</strong>
                        <span>${CONFIG.business.email}</span>
                    </div>
                </div>
                <div class="contact-item">
                    <span class="contact-icon">${getIcon('location')}</span>
                    <div class="contact-text">
                        <strong>${CONFIG.business.addressLabel || 'Location'}</strong>
                        <span>${CONFIG.business.address}</span>
                    </div>
                </div>
            </div>
        `;
    }

    const form = document.getElementById('bookingForm');
    if (form) {
        const fields = CONFIG.booking.form.fields;
        const options = fields.eventType.options.map(opt =>
            `<option value="${opt.value}">${opt.label}</option>`
        ).join('');

        form.innerHTML = `
            <h3>${CONFIG.booking.form.title}</h3>
            <div class="form-row">
                <div class="form-group">
                    <label for="name">${fields.name.label}</label>
                    <input type="text" id="name" name="name" placeholder="${fields.name.placeholder}" required>
                </div>
                <div class="form-group">
                    <label for="email">${fields.email.label}</label>
                    <input type="email" id="email" name="email" placeholder="${fields.email.placeholder}" required>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label for="eventType">${fields.eventType.label}</label>
                    <select id="eventType" name="eventType" required>
                        <option value="">${fields.eventType.placeholder}</option>
                        ${options}
                    </select>
                </div>
                <div class="form-group">
                    <label for="date">${fields.date.label}</label>
                    <input type="date" id="date" name="date" required>
                </div>
            </div>
            <div class="form-group">
                <label for="message">${fields.message.label}</label>
                <textarea id="message" name="message" placeholder="${fields.message.placeholder}" rows="4"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">${CONFIG.booking.form.submitText}</button>
        `;
    }
}

/**
 * Render Footer
 */
function renderFooter() {
    const footer = document.querySelector('.footer');
    if (!footer || !CONFIG.footer) return;

    const socialLinks = CONFIG.footer.socialLinks.map(social => `
        <a href="${social.url}" class="social-link" aria-label="${social.label}">
            ${getIcon(social.platform)}
        </a>
    `).join('');

    const columns = CONFIG.footer.columns.map(col => `
        <div class="footer-column">
            <h4>${col.title}</h4>
            <ul>
                ${col.links.map(link => `<li><a href="${link.href}">${link.text}</a></li>`).join('')}
            </ul>
        </div>
    `).join('');

    const footerContent = document.querySelector('.footer-content');
    if (footerContent) {
        footerContent.innerHTML = `
            <div class="footer-brand">
                <a href="#" class="logo">
                    <span class="logo-icon">${CONFIG.business.name.charAt(0)}</span>
                    ${CONFIG.business.name}
                </a>
                <p>${CONFIG.footer.description}</p>
                <div class="social-links">${socialLinks}</div>
            </div>
            ${columns}
        `;
    }

    const footerBottom = document.querySelector('.footer-bottom');
    if (footerBottom) {
        footerBottom.innerHTML = `
            <p>${CONFIG.footer.copyright}</p>
            <div class="family-badge">
                ${getIcon('heart')}
                <span>${CONFIG.footer.familyBadge}</span>
            </div>
        `;
    }
}

/**
 * Update page meta
 */
function updateMeta() {
    if (CONFIG.meta) {
        document.title = CONFIG.meta.title;
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', CONFIG.meta.description);
        }
    }
}

// ============================================
// INTERACTIVE FEATURES
// ============================================

/**
 * Initialize Mobile Navigation
 */
function initMobileNav() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (!hamburger || !navMenu) return;

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking links
    navMenu.addEventListener('click', (e) => {
        if (e.target.classList.contains('nav-link')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

/**
 * Initialize Navbar Scroll Effect
 */
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

/**
 * Initialize Form Handling
 */
function initFormHandling() {
    const bookingForm = document.getElementById('bookingForm');
    if (!bookingForm) return;

    // Set minimum date to today
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }

    // Handle form submission
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const submitBtn = bookingForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        const formConfig = CONFIG.booking.form;

        submitBtn.textContent = formConfig.submittingText;
        submitBtn.disabled = true;

        // Simulate form submission
        setTimeout(() => {
            submitBtn.textContent = formConfig.successText;
            submitBtn.style.backgroundColor = 'var(--color-forest)';
            submitBtn.style.color = 'var(--color-white)';

            bookingForm.reset();

            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.backgroundColor = '';
                submitBtn.style.color = '';
                submitBtn.disabled = false;
            }, 3000);
        }, 1500);
    });
}

/**
 * Initialize Scroll Animations
 */
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Apply to animated elements
    document.querySelectorAll('.premise-card, .event-card, .gallery-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ============================================
// INITIALIZATION
// ============================================

/**
 * Initialize all components
 */
function init() {
    // Render content from config
    updateMeta();
    renderLogo();
    renderNavigation();
    renderHero();
    renderVenues();
    renderEvents();
    renderGallery();
    renderBooking();
    renderFooter();

    // Initialize interactive features
    initMobileNav();
    initNavbarScroll();
    initFormHandling();

    // Initialize animations after a short delay to ensure DOM is ready
    setTimeout(initScrollAnimations, 100);
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
