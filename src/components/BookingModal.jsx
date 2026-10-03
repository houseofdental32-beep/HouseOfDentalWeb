import React, { useState, useEffect } from 'react';

const TREATMENTS = [
  "Clear Aligners & 3D Scan",
  "Dental Implants & Tooth Replacement",
  "Root Canal Treatment (Painless Rotary RCT)",
  "Consultation & Digital RVG X-Ray",
  "Professional Teeth Whitening",
  "Kids & Pediatric Dentistry",
  "Wisdom Tooth Removal & Oral Surgery",
  "Cosmetic Veneers & Smile Makeover",
  "Emergency Dental Care"
];

const TIME_SLOTS = [
  "Morning (10:00 AM – 1:00 PM)",
  "Afternoon (1:00 PM – 4:00 PM)",
  "Evening (4:00 PM – 8:30 PM)"
];

export default function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState(TREATMENTS[0]);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState(TIME_SLOTS[0]);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [lastWhatsappUrl, setLastWhatsappUrl] = useState('');

  // Set default date to tomorrow
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    setSelectedDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  // Global event listener to open modal from anywhere in the Astro app
  useEffect(() => {
    const handleOpenEvent = (e) => {
      const treatment = e.detail?.treatment;
      if (treatment) {
        const matched = TREATMENTS.find(t => t.toLowerCase().includes(treatment.toLowerCase()));
        if (matched) setSelectedTreatment(matched);
      }
      setSubmitted(false);
      setIsOpen(true);
    };

    const handleDocumentClick = (e) => {
      const target = e.target.closest('[data-open-booking]');
      if (target) {
        e.preventDefault();
        const trt = target.getAttribute('data-treatment');
        if (trt) {
          const match = TREATMENTS.find(t => t.toLowerCase().includes(trt.toLowerCase()));
          if (match) setSelectedTreatment(match);
        }
        setSubmitted(false);
        setIsOpen(true);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('open-booking-modal', handleOpenEvent);
    document.addEventListener('click', handleDocumentClick);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('open-booking-modal', handleOpenEvent);
      document.removeEventListener('click', handleDocumentClick);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullName.trim() || !phone.trim()) {
      alert("Please enter your name and phone number.");
      return;
    }

    const message = [
      "Hello House of Dental, I would like to book an appointment:",
      `• Patient Name: ${fullName.trim()}`,
      `• Phone: ${phone.trim()}`,
      `• Treatment: ${selectedTreatment}`,
      `• Preferred Date: ${selectedDate}`,
      `• Preferred Slot: ${selectedSlot}`,
      notes.trim() ? `• Notes/Symptoms: ${notes.trim()}` : null,
      "• Studio: Bagaluru, Bengaluru"
    ].filter(Boolean).join("\n");

    const whatsappUrl = `https://wa.me/919113563040?text=${encodeURIComponent(message)}`;

    // Trigger Google Ads conversion tracking if available
    if (typeof window !== 'undefined' && typeof window.gtag_report_conversion === 'function') {
      try {
        window.gtag_report_conversion(whatsappUrl);
      } catch (err) {
        console.warn("Conversion reporting error:", err);
      }
    }

    // Open WhatsApp
    setLastWhatsappUrl(whatsappUrl);
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      {/* Dimmed backdrop with smooth blur */}
      <div 
        className="fixed inset-0 bg-japandi-charcoal/60 dark:bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-xl rounded-[2.5rem] bg-japandi-cream dark:bg-japandi-sand border border-japandi-clay/50 shadow-2xl overflow-hidden z-10 my-auto text-japandi-charcoal transition-all">
        
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 w-10 h-10 rounded-full border border-japandi-clay/60 bg-japandi-sand/60 hover:bg-japandi-clay/40 flex items-center justify-center text-japandi-charcoal hover:text-japandi-moss transition-colors z-20 focus:outline-none"
          aria-label="Close booking modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Header */}
        <div className="p-6 sm:p-8 pb-4 border-b border-japandi-clay/30 bg-japandi-sand/30">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-japandi-moss/30 bg-japandi-moss/10 text-japandi-moss text-[10px] font-semibold uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-japandi-moss animate-pulse"></span>
            Priority Slot Booking &bull; Bagaluru, Bengaluru
          </div>
          <h2 id="booking-modal-title" className="text-2xl sm:text-3xl font-serif font-medium text-japandi-charcoal tracking-tight">
            Reserve Your Dental Visit
          </h2>
          <p className="text-xs sm:text-sm text-japandi-earth font-light mt-1.5">
            Calm, unhurried care at our Japandi studio. No waiting queues.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 pt-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-japandi-moss/10 text-japandi-moss mx-auto flex items-center justify-center text-2xl font-bold">
                ✓
              </div>
              <h3 className="text-2xl font-serif font-medium text-japandi-charcoal">
                Appointment Requested!
              </h3>
              <p className="text-xs sm:text-sm text-japandi-earth font-light max-w-md mx-auto leading-relaxed">
                We have prepared your reservation on WhatsApp. Our clinical desk at Bagaluru will promptly confirm your slot.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                {lastWhatsappUrl && (
                  <a
                    href={lastWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-emerald-600 text-white text-xs font-semibold uppercase tracking-wider hover:bg-emerald-700 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Send Message on WhatsApp</span>
                  </a>
                )}
                <a
                  href="tel:09113563040"
                  className="w-full sm:w-auto px-6 py-3 rounded-full border border-japandi-moss text-japandi-moss text-xs font-semibold uppercase tracking-wider hover:bg-japandi-moss/10 transition-colors"
                >
                  Call Desk
                </a>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-japandi-sand/80 text-japandi-charcoal hover:bg-japandi-clay/40 text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 text-left">
              {/* Treatment Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-japandi-earth mb-2">
                  Select Treatment
                </label>
                <select
                  value={selectedTreatment}
                  onChange={(e) => setSelectedTreatment(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl border border-japandi-clay/60 bg-japandi-sand/40 text-xs sm:text-sm text-japandi-charcoal focus:border-japandi-moss focus:outline-none transition-colors"
                >
                  {TREATMENTS.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              {/* Date & Slot in 2 Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-japandi-earth mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    required
                    className="w-full px-4 py-3 rounded-2xl border border-japandi-clay/60 bg-japandi-sand/40 text-xs sm:text-sm text-japandi-charcoal focus:border-japandi-moss focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-japandi-earth mb-2">
                    Preferred Time
                  </label>
                  <select
                    value={selectedSlot}
                    onChange={(e) => setSelectedSlot(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl border border-japandi-clay/60 bg-japandi-sand/40 text-xs sm:text-sm text-japandi-charcoal focus:border-japandi-moss focus:outline-none transition-colors"
                  >
                    {TIME_SLOTS.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Patient Contact Info in 2 Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-japandi-earth mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priya Ramesh"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl border border-japandi-clay/60 bg-japandi-sand/40 text-xs sm:text-sm text-japandi-charcoal placeholder:text-japandi-earth/50 focus:border-japandi-moss focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-japandi-earth mb-2">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl border border-japandi-clay/60 bg-japandi-sand/40 text-xs sm:text-sm text-japandi-charcoal placeholder:text-japandi-earth/50 focus:border-japandi-moss focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Optional Notes */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-japandi-earth mb-2">
                  Any Specific Symptoms / Notes (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Mild pain in upper molar, or looking for aligner 3D scan"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl border border-japandi-clay/60 bg-japandi-sand/40 text-xs sm:text-sm text-japandi-charcoal placeholder:text-japandi-earth/50 focus:border-japandi-moss focus:outline-none transition-colors"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-full bg-japandi-moss text-japandi-cream hover:bg-japandi-charcoal font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-md shadow-japandi-moss/20 flex items-center justify-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                  </svg>
                  <span>Confirm &amp; Send to WhatsApp</span>
                </button>
              </div>

              <p className="text-center text-[11px] text-japandi-earth font-light">
                Instant slot confirmation. No spam, ever.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
