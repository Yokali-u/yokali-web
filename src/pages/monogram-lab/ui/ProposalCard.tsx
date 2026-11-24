import { useState } from 'react'
import type { MonogramProposal } from '../model/proposals'
import { MonogramSvg } from './MonogramSvg'

interface ProposalCardProps {
  proposal: MonogramProposal
}

type HighlightMode = 'all' | 'Y' | 'A' | 'K'

const TRACE_COLORS: Record<'Y' | 'A' | 'K', string> = {
  Y: '#23483B',
  A: '#A64935',
  K: '#202924',
}

const SCALE_SIZES = [16, 24, 32, 48, 128] as const

export function ProposalCard({ proposal }: ProposalCardProps) {
  const [highlight, setHighlight] = useState<HighlightMode>('all')
  const totalScore = proposal.evaluation.reduce((sum, item) => sum + item.score, 0)
  const maxScore = proposal.evaluation.length * 5

  const activeTrace =
    highlight === 'all'
      ? null
      : proposal.traces.find((t) => t.letter === highlight) ?? null

  return (
    <article
      id={proposal.id}
      className="scroll-mt-24 border-t border-line-strong pt-14 pb-16"
    >
      {/* Cabecera editorial de la propuesta */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <p className="font-sans text-xs font-bold tracking-[0.2em] text-ink-accent uppercase">
            Propuesta {proposal.index} — {proposal.principle}
          </p>
          <h2 className="mt-3 font-display text-3xl font-medium text-ink-primary sm:text-4xl">
            {proposal.name}
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-secondary">
            {proposal.summary}
          </p>
        </div>

        <div className="lg:col-span-4 lg:text-right">
          <p className="font-sans text-xs font-semibold tracking-[0.16em] text-ink-secondary uppercase">
            Evaluación global
          </p>
          <p className="mt-1 font-display text-3xl font-medium text-ink-brand">
            {totalScore}
            <span className="text-lg text-ink-secondary">/{maxScore}</span>
          </p>
        </div>
      </div>

      {/* Fila 1: Bicolor (claro y oscuro) + Diagrama constructivo interactivo */}
      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Bicolor sobre Marfil Cálido y Verde Profundo */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-7">
          <div className="flex flex-col justify-between rounded-panel border border-line-subtle bg-surface-base p-8">
            <span className="font-sans text-[11px] font-bold tracking-[0.18em] text-ink-secondary uppercase">
              Bicolor · Marfil cálido
            </span>
            <div className="my-8 flex items-center justify-center">
              <MonogramSvg
                proposal={proposal}
                mode="bicolor"
                size={128}
                title={`Propuesta ${proposal.index}: ${proposal.name} en bicolor`}
              />
            </div>
            <span className="font-sans text-xs text-ink-secondary">
              #23483B + #A64935
            </span>
          </div>

          <div className="flex flex-col justify-between rounded-panel bg-surface-forest p-8 text-ink-on-dark">
            <span className="font-sans text-[11px] font-bold tracking-[0.18em] text-surface-clay uppercase">
              Bicolor · Verde profundo
            </span>
            <div className="my-8 flex items-center justify-center">
              <MonogramSvg
                proposal={proposal}
                mode="bicolor-dark"
                size={128}
                title={`Propuesta ${proposal.index}: ${proposal.name} sobre fondo oscuro`}
              />
            </div>
            <span className="font-sans text-xs text-ink-on-dark-muted">
              #F5F1E8 + #EAD2C5
            </span>
          </div>
        </div>

        {/* Diagrama constructivo interactivo: revela Y, A y K ocultas */}
        <div className="flex flex-col justify-between rounded-panel border border-line-subtle bg-surface-elevated p-7 lg:col-span-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="font-sans text-[11px] font-bold tracking-[0.18em] text-ink-brand uppercase">
              Diagrama constructivo
            </span>

            <div
              role="group"
              aria-label={`Resaltar iniciales en ${proposal.name}`}
              className="inline-flex rounded-editorial border border-line-subtle bg-surface-base p-0.5"
            >
              {(['all', 'Y', 'A', 'K'] as const).map((key) => {
                const active = highlight === key
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setHighlight(key)}
                    aria-pressed={active}
                    className={`cursor-pointer rounded-editorial px-2.5 py-1 font-sans text-xs font-bold transition-colors ${
                      active
                        ? 'bg-brand-forest text-ink-on-dark'
                        : 'text-ink-secondary hover:text-ink-primary'
                    }`}
                  >
                    {key === 'all' ? 'Todo' : key}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="my-6 flex items-center justify-center">
            <svg
              width="160"
              height="160"
              viewBox="0 0 64 64"
              fill="none"
              role="img"
              aria-label={`Diagrama constructivo de ${proposal.name}`}
              className="rounded-editorial border border-line-subtle bg-surface-base"
            >
              {/* Retícula constructiva 8×8 */}
              {[10, 21, 32, 43, 54].map((pos) => (
                <g key={pos} stroke="#202924" strokeOpacity="0.1" strokeWidth="0.5">
                  <line x1={pos} y1="4" x2={pos} y2="60" />
                  <line x1="4" y1={pos} x2="60" y2={pos} />
                </g>
              ))}

              {/* Silueta base atenuada */}
              <g opacity="0.18">
                {proposal.parts.map((part, idx) =>
                  part.kind === 'fill' ? (
                    <path key={idx} d={part.d} fill="#202924" />
                  ) : (
                    <path
                      key={idx}
                      d={part.d}
                      stroke="#202924"
                      strokeWidth={part.strokeWidth ?? 6.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  ),
                )}
              </g>

              {/* Trazos constructivos de Y, A y K */}
              {proposal.traces.map((trace) => {
                const isVisible =
                  highlight === 'all' || highlight === trace.letter
                if (!isVisible) return null
                return (
                  <g
                    key={trace.letter}
                    stroke={TRACE_COLORS[trace.letter]}
                    strokeWidth={highlight === 'all' ? '2.1' : '3.2'}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray={highlight === 'all' ? '3 2.5' : undefined}
                  >
                    {trace.paths.map((d, idx) => (
                      <path key={idx} d={d} />
                    ))}
                  </g>
                )
              })}
            </svg>
          </div>

          <p className="min-h-[3.25rem] text-xs leading-relaxed text-ink-secondary">
            {activeTrace ? (
              <>
                <strong className="text-ink-primary">
                  Letra {activeTrace.letter}:
                </strong>{' '}
                {activeTrace.note}
              </>
            ) : (
              'Selecciona Y, A o K arriba para aislar la estructura de cada inicial dentro de la geometría del símbolo.'
            )}
          </p>
        </div>
      </div>

      {/* Fila 2: Monocromo (4 variantes) + Composición con YOKALI */}
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="rounded-panel border border-line-subtle bg-surface-elevated p-6 lg:col-span-6">
          <p className="mb-5 font-sans text-[11px] font-bold tracking-[0.18em] text-ink-secondary uppercase">
            Validación monocromática
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="flex flex-col items-center gap-3 rounded-editorial border border-line-subtle bg-surface-base p-4">
              <MonogramSvg proposal={proposal} mode="forest" size={44} />
              <span className="text-[11px] font-medium text-ink-secondary">
                Verde sólido
              </span>
            </div>
            <div className="flex flex-col items-center gap-3 rounded-editorial border border-line-subtle bg-surface-base p-4">
              <MonogramSvg proposal={proposal} mode="terracotta" size={44} />
              <span className="text-[11px] font-medium text-ink-secondary">
                Terracota
              </span>
            </div>
            <div className="flex flex-col items-center gap-3 rounded-editorial border border-line-subtle bg-surface-elevated p-4">
              <MonogramSvg proposal={proposal} mode="ink" size={44} />
              <span className="text-[11px] font-medium text-ink-secondary">
                Tinta / Negro
              </span>
            </div>
            <div className="flex flex-col items-center gap-3 rounded-editorial bg-surface-ink p-4">
              <MonogramSvg proposal={proposal} mode="ivory" size={44} />
              <span className="text-center text-[11px] font-medium text-ink-on-dark-muted">
                Marfil / Oscuro
              </span>
            </div>
          </div>
        </div>

        {/* Composición junto al nombre YOKALI */}
        <div className="rounded-panel border border-line-subtle bg-surface-elevated p-6 lg:col-span-6">
          <p className="mb-5 font-sans text-[11px] font-bold tracking-[0.18em] text-ink-secondary uppercase">
            Composición junto al nombre YOKALI
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex h-24 items-center justify-center gap-3 rounded-editorial border border-line-subtle bg-surface-base px-5">
              <MonogramSvg proposal={proposal} mode="bicolor" size={32} />
              <span className="font-sans text-[15px] font-bold tracking-[0.22em] text-ink-primary uppercase">
                YOKALI
              </span>
            </div>
            <div className="flex h-24 items-center justify-center gap-3 rounded-editorial bg-surface-ink px-5">
              <MonogramSvg proposal={proposal} mode="bicolor-dark" size={32} />
              <span className="font-sans text-[15px] font-bold tracking-[0.22em] text-ink-on-dark uppercase">
                YOKALI
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Fila 3: Escalabilidad 16, 24, 32, 48, 128px */}
      <div className="mt-6 rounded-panel border border-line-subtle bg-surface-elevated p-6">
        <p className="mb-5 font-sans text-[11px] font-bold tracking-[0.18em] text-ink-secondary uppercase">
          Prueba de escalabilidad real (16 · 24 · 32 · 48 · 128 px)
        </p>
        <div className="flex flex-wrap items-end justify-around gap-8 py-2">
          {SCALE_SIZES.map((px) => (
            <div key={px} className="flex flex-col items-center gap-3">
              <div className="flex items-center justify-center rounded-editorial border border-line-subtle bg-surface-base p-2">
                <MonogramSvg proposal={proposal} mode="bicolor" size={px} />
              </div>
              <span className="font-sans text-xs font-semibold text-ink-secondary">
                {px}px
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Fila 4: Explicación de integración + Evaluación de 8 criterios */}
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="space-y-4 lg:col-span-5">
          <h3 className="font-display text-xl font-medium text-ink-primary">
            Integración de Y, A y K
          </h3>
          <p className="text-sm leading-relaxed text-ink-secondary">
            {proposal.integrationExplanation}
          </p>
          <p className="border-l-2 border-brand-terracotta pl-4 text-sm font-medium text-ink-primary">
            {proposal.verdict}
          </p>
        </div>

        <div className="lg:col-span-7">
          <h3 className="mb-4 font-display text-xl font-medium text-ink-primary">
            Evaluación técnica y de marca
          </h3>
          <div className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
            {proposal.evaluation.map((item) => (
              <div
                key={item.criterion}
                className="border-b border-line-subtle pb-2.5"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-xs font-semibold text-ink-primary">
                    {item.criterion}
                  </span>
                  <span className="font-sans text-xs font-bold text-ink-brand">
                    {item.score}/5
                  </span>
                </div>
                <p className="mt-0.5 text-[11px] leading-snug text-ink-secondary">
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
