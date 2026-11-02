import React, { useState, useEffect } from 'react';

interface BookingDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPurpose?: string;
}

export const BookingDrawer: React.FC<BookingDrawerProps> = ({
  isOpen,
  onClose,
  defaultPurpose = ''
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    purpose: '',
    dates: '',
    guests: '2',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (defaultPurpose) {
      setFormData((prev) => ({ ...prev, purpose: defaultPurpose }));
    }
  }, [defaultPurpose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <>
      <div className="drawer-backdrop" onClick={onClose} />
      <aside className="side-drawer" role="dialog" aria-modal="true" aria-label="Reservation and Consultation Drawer">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px', paddingBottom: '16px', borderBottom: '1px solid rgba(150,112,3,0.22)' }}>
          <div>
            <span style={{ color: '#5b0e5d', fontSize: '14px', fontWeight: 600, display: 'block' }}>
              Private Concierge Reservation
            </span>
            <h2 className="typo-h2" style={{ color: '#967003', margin: 0 }}>
              4U Edge Up
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '28px',
              color: '#666156',
              cursor: 'pointer',
              lineHeight: 1
            }}
            aria-label="Close drawer"
          >
            ×
          </button>
        </div>

        {isSubmitted ? (
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'rgba(91, 14, 93, 0.12)',
              color: '#5b0e5d',
              fontSize: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px auto'
            }}>
              ✓
            </div>
            <h3 className="typo-h3" style={{ color: '#967003', marginBottom: '10px' }}>
              Inquiry Dispatched Successfully
            </h3>
            <p className="typo-body" style={{ color: '#555', marginBottom: '24px' }}>
              Thank you, <strong>{formData.name || 'Valued Guest'}</strong>. Our senior lifestyle architect and private concierge will review your requirements for <strong>{formData.purpose || 'your journey'}</strong> and contact you within 4 hours.
            </p>
            <button
              type="button"
              onClick={handleReset}
              className="btn-primary"
              style={{ width: '100%' }}
            >
              Done & Return
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '18px' }}>
              <label style={{ fontSize: '15px', fontWeight: 600, color: '#443300' }}>
                Full Name *
              </label>
              <input
                type="text"
                required
                className="form-input"
                placeholder="e.g. Lord Alexander Wright"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '18px' }}>
              <div>
                <label style={{ fontSize: '15px', fontWeight: 600, color: '#443300' }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  className="form-input"
                  placeholder="alexander@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label style={{ fontSize: '15px', fontWeight: 600, color: '#443300' }}>
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  className="form-input"
                  placeholder="+41 22 555 0199"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            <div style={{ marginBottom: '18px' }}>
              <label style={{ fontSize: '15px', fontWeight: 600, color: '#443300' }}>
                Journey / Service Selection
              </label>
              <input
                type="text"
                className="form-input"
                value={formData.purpose}
                onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                placeholder="e.g. Lake Como, Dolomites & Thermal Sanctuary"
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '18px' }}>
              <div>
                <label style={{ fontSize: '15px', fontWeight: 600, color: '#443300' }}>
                  Estimated Travel Dates
                </label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. Autumn 2026"
                  value={formData.dates}
                  onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                />
              </div>
              <div>
                <label style={{ fontSize: '15px', fontWeight: 600, color: '#443300' }}>
                  Number of Guests
                </label>
                <select
                  className="form-input"
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                >
                  <option value="1">1 Guest (Private Sabbatical)</option>
                  <option value="2">2 Guests (Couple / Executive)</option>
                  <option value="3-4">3 - 4 Guests (Family / Partner Delegation)</option>
                  <option value="5+">5+ Guests (Private Summit)</option>
                </select>
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ fontSize: '15px', fontWeight: 600, color: '#443300' }}>
                Bespoke Requirements / Health or Business Focus
              </label>
              <textarea
                rows={3}
                className="form-input"
                placeholder="Share any special preferences: private aviation, Ayurvedic diet, factory inspection sectors, or SMART Owner objectives..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="btn-primary"
              style={{ width: '100%', padding: '16px 28px' }}
            >
              Submit Priority Reservation
            </button>
            <p style={{ fontSize: '13px', color: '#888', marginTop: '12px', textAlign: 'center' }}>
              Discreet & Confidential · No automated spam · Direct senior advisor contact
            </p>
          </form>
        )}
      </aside>
    </>
  );
};
