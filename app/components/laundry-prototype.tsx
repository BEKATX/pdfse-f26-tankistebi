"use client"

import { useState, type ReactNode } from "react"
import {
  ArrowLeft,
  BatteryFull,
  Bell,
  Check,
  ChevronRight,
  Clock3,
  Signal,
  Wifi,
} from "lucide-react"

type Screen = "overview" | "details" | "confirmed"

function WasherIcon({ tone = "neutral" }: { tone?: "neutral" | "green" | "amber" | "red" }) {
  return (
    <span className={`washer-icon washer-icon-${tone}`} aria-hidden="true">
      <span className="washer-controls"><i /><i /><i /></span>
      <span className="washer-door"><span /></span>
    </span>
  )
}

function StatusBadge({ tone, children }: { tone: "green" | "amber" | "red"; children: ReactNode }) {
  return (
    <span className={`status-badge status-badge-${tone}`}>
      <span className="status-dot" aria-hidden="true" />
      {children}
    </span>
  )
}

function MachineCard({
  number,
  tone,
  status,
  detail,
  action,
  onClick,
}: {
  number: number
  tone: "green" | "amber" | "red"
  status: string
  detail: string
  action?: ReactNode
  onClick?: () => void
}) {
  const content = (
    <>
      <span className="machine-icon-wrap">
        <WasherIcon tone={tone} />
      </span>
      <span className="machine-copy">
        <span className="machine-title-row">
          <span className="machine-name" role="heading" aria-level={3}>Machine {number}</span>
          <StatusBadge tone={tone}>{status}</StatusBadge>
        </span>
        <span className="machine-detail">{detail}</span>
        {action}
      </span>
      {onClick && <ChevronRight className="machine-chevron" size={18} aria-hidden="true" />}
    </>
  )

  if (onClick) {
    return (
      <button type="button" className="machine-card machine-card-action" onClick={onClick} aria-label={`Machine ${number}, ${status.toLowerCase()}, ${detail}`}>
        {content}
      </button>
    )
  }

  return <article className="machine-card">{content}</article>
}

function PhoneStatusBar() {
  return (
    <div className="phone-status" aria-label="Phone status bar">
      <span>9:41</span>
      <div className="phone-status-icons" aria-hidden="true">
        <Signal size={14} strokeWidth={2.5} />
        <Wifi size={14} strokeWidth={2.5} />
        <BatteryFull size={17} strokeWidth={2.3} />
      </div>
    </div>
  )
}

function AppHeader({ screen, onBack }: { screen: Screen; onBack: () => void }) {
  return (
    <header className="app-header">
      <div className="app-header-top">
        {screen === "overview" ? (
          <div className="brand-mark" aria-hidden="true">K</div>
        ) : (
          <button type="button" className="icon-button" onClick={onBack} aria-label="Back to all machines">
            <ArrowLeft size={19} />
          </button>
        )}
        <p className="header-location">KIU Dorms <span>·</span> Level -1 Laundry</p>
        <div className="live-indicator"><span /> LIVE</div>
      </div>
    </header>
  )
}

function OverviewScreen({ onOpenMachine, machineOneStarted, onStartWash }: { onOpenMachine: () => void; machineOneStarted: boolean; onStartWash: () => void }) {
  return (
    <>
      <div className="screen-heading">
        <div>
          <p className="eyebrow">BLOCKS F &amp; G <span className="eyebrow-dot">/</span> BASEMENT</p>
          <h1>Laundry status</h1>
          <p className="screen-subtitle">Know before you make the trip.</p>
        </div>
        <div className="machine-count"><strong>04</strong><span>WASHERS</span></div>
      </div>

      <section className="machine-list" aria-label="Washing machine availability">
        <MachineCard
          number={1}
          tone={machineOneStarted ? "amber" : "green"}
          status={machineOneStarted ? "RUNNING" : "FREE"}
          detail={machineOneStarted ? "42 min remaining" : "Ready for a new load"}
          action={!machineOneStarted ? (
            <button type="button" className="card-action" onClick={onStartWash}>
              <span>Start Wash</span><ChevronRight size={15} aria-hidden="true" />
            </button>
          ) : undefined}
        />
        <MachineCard number={2} tone="amber" status="RUNNING" detail="14 min remaining · Eco 40°C" onClick={onOpenMachine} />
        <MachineCard number={3} tone="red" status="IDLE / FINISHED" detail="Finished 20 min ago - clothes inside" />
        <MachineCard number={4} tone="amber" status="RUNNING" detail="38 min remaining" />
      </section>

      <aside className="tip-card">
        <div className="tip-icon"><Clock3 size={17} aria-hidden="true" /></div>
        <p>Check availability from your room before walking down to -1.</p>
      </aside>
      <footer className="screen-footer"><span className="footer-dot" /> Your laundry room, at a glance</footer>
    </>
  )
}

function DetailsScreen({ onNotify, onBack }: { onNotify: () => void; onBack: () => void }) {
  return (
    <>
      <div className="screen-heading detail-heading">
        <div>
          <p className="eyebrow">WASHER 02 <span className="eyebrow-dot">/</span> BLOCK F &amp; G</p>
          <h1>Machine 2 Status</h1>
          <p className="screen-subtitle">A little more time, then it&apos;s yours.</p>
        </div>
      </div>

      <section className="detail-panel" aria-label="Machine 2 cycle details">
        <div className="detail-art">
          <div className="detail-halo" />
          <WasherIcon tone="amber" />
          <span className="cycle-orbit orbit-one" />
          <span className="cycle-orbit orbit-two" />
        </div>
        <StatusBadge tone="amber">RUNNING</StatusBadge>
        <h2>Running <span>·</span> Cycle finishes at 22:15</h2>
        <div className="cycle-progress" aria-label="Cycle is nearly complete">
          <div className="cycle-progress-track"><span /></div>
          <div className="cycle-progress-labels"><span>Eco 40°C</span><span>14 min left</span></div>
        </div>
      </section>

      <div className="details-note">
        <Clock3 size={17} aria-hidden="true" />
        <p>Set a reminder and head down just before the cycle ends.</p>
      </div>

      <div className="screen-actions">
        <button type="button" className="primary-button notify-button" onClick={onNotify}>
          <Bell size={18} aria-hidden="true" />
          <span>Notify me 5 mins before finish</span>
        </button>
        <button type="button" className="text-button" onClick={onBack}>
          <ArrowLeft size={16} aria-hidden="true" /> Back to all machines
        </button>
      </div>
      <footer className="screen-footer"><span className="footer-dot" /> We&apos;ll remind you at 22:10</footer>
    </>
  )
}

function ConfirmationScreen({ onBack }: { onBack: () => void }) {
  return (
    <div className="confirmation-content" role="status" aria-live="polite">
      <div className="confirmation-check"><Check size={38} strokeWidth={2.5} aria-hidden="true" /></div>
      <p className="eyebrow confirmation-eyebrow">REMINDER SCHEDULED</p>
      <h1>Alert Set!</h1>
      <p className="confirmation-message">We&apos;ll notify you at <strong>22:10</strong> so you can head down to -1 before another resident takes it.</p>
      <div className="confirmation-time"><Bell size={17} aria-hidden="true" /><span>Today at 22:10</span></div>
      <button type="button" className="primary-button confirmation-button" onClick={onBack}>Back to Overview</button>
      <div className="confirmation-footnote"><span className="footer-dot" /> You can get back to your evening</div>
    </div>
  )
}

export function LaundryPrototype() {
  const [screen, setScreen] = useState<Screen>("overview")
  const [machineOneStarted, setMachineOneStarted] = useState(false)

  return (
    <main className="prototype-stage">
      <div className="stage-caption" aria-hidden="true">
        <span className="stage-overline">KIU RESIDENT SERVICES</span>
        <span className="stage-title">Laundry, minus<br />the guesswork.</span>
        <span className="stage-meta">F / G BLOCKS <span>·</span> -1 FLOOR</span>
      </div>
      <section className="device-shell" aria-label="KIU dorm laundry prototype">
        <div className="device-screen">
          <PhoneStatusBar />
          <AppHeader screen={screen} onBack={() => setScreen("overview")} />
          <div key={screen} className={`screen-content screen-${screen}`}>
            {screen === "overview" && (
              <OverviewScreen
                onOpenMachine={() => setScreen("details")}
                machineOneStarted={machineOneStarted}
                onStartWash={() => setMachineOneStarted(true)}
              />
            )}
            {screen === "details" && (
              <DetailsScreen onNotify={() => setScreen("confirmed")} onBack={() => setScreen("overview")} />
            )}
            {screen === "confirmed" && <ConfirmationScreen onBack={() => setScreen("overview")} />}
          </div>
          <div className="home-indicator" aria-hidden="true"><span /></div>
        </div>
      </section>
      <p className="stage-note">A small check saves a long walk.</p>
    </main>
  )
}
