import React from 'react';
import { ModalData } from '../types';

interface ItemModalProps {
  data: ModalData | null;
  onClose: () => void;
  onOpenBooking: (purpose: string) => void;
}

export const ItemModal: React.FC<ItemModalProps> = ({
  data,
  onClose,
  onOpenBooking
}) => {
  if (!data) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '18px' }}>
          <div>
            <span style={{ color: '#5b0e5d', fontSize: '15px', fontWeight: 600, display: 'block' }}>
              {data.category}
            </span>
            <h2 className="typo-h2" style={{ color: '#967003', margin: '4px 0 0 0' }}>
              {data.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '32px',
              color: '#666156',
              cursor: 'pointer',
              lineHeight: 1
            }}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        {data.price && (
          <div style={{ marginBottom: '16px', fontSize: '20px', fontWeight: 600, color: '#443300' }}>
            Investment: <span style={{ color: '#967003' }}>{data.price}</span>
          </div>
        )}

        <div style={{ padding: '20px 0', borderTop: '1px solid rgba(150,112,3,0.18)', borderBottom: '1px solid rgba(150,112,3,0.18)', marginBottom: '24px' }}>
          <p className="typo-body" style={{ color: '#333', whiteSpace: 'pre-line' }}>
            {data.description}
          </p>

          {data.inclusions && data.inclusions.length > 0 && (
            <div style={{ marginTop: '20px' }}>
              <h4 style={{ fontSize: '16px', fontWeight: 600, color: '#5b0e5d', marginBottom: '8px' }}>
                Included Privileges:
              </h4>
              <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
                {data.inclusions.map((inc, i) => (
                  <li key={i} style={{ color: '#555', fontSize: '16px', marginBottom: '4px' }}>
                    {inc}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '14px' }}>
          <button
            type="button"
            onClick={onClose}
            className="btn-outline"
          >
            Close Dossier
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenBooking(data.title);
            }}
            className="btn-primary"
          >
            Inquire on This Offering
          </button>
        </div>
      </div>
    </div>
  );
};
