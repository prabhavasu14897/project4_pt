import { useState } from 'react'
import { CheckCircle2, Sparkle } from 'lucide-react'
import Badge from '../common/Badge'
import './SpecsPanel.css'

export default function SpecsPanel({ detail }) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="specs-panel">
      <div className="specs-panel__tabs">
        {detail.tabs.map((tab, index) => (
          <button
            type="button"
            key={tab}
            className={`specs-panel__tab ${activeTab === index ? 'is-active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 0 ? (
        <div className="specs-panel__grid">
          <div className="specs-card">
            <div className="specs-card__head">
              <h2>{detail.specs.title}</h2>
              <Badge tone="outline">{detail.specs.batchTag}</Badge>
            </div>
            <table className="specs-table">
              <tbody>
                {detail.specs.rows.map((row, index) => (
                  <tr key={row.label} className={index % 2 === 1 ? 'is-alt' : ''}>
                    <th scope="row">{row.label}</th>
                    <td>{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="specs-card">
            <div className="specs-card__head">
              <h2>
                <Sparkle aria-hidden="true" />
                {detail.safety.title}
              </h2>
            </div>
            <ul className="safety-list">
              {detail.safety.steps.map((step) => (
                <li key={step.label}>
                  <CheckCircle2 aria-hidden="true" />
                  <p>
                    <strong>{step.label}:</strong> {step.body}
                  </p>
                </li>
              ))}
            </ul>
            <div className="safety-note">
              <Sparkle aria-hidden="true" />
              <div>
                <strong>{detail.safety.note.title}</strong>
                <p>{detail.safety.note.body}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="specs-panel__placeholder">
          <p>This section is being prepared and will be available soon.</p>
        </div>
      )}
    </section>
  )
}
