"use client";

import { useWorkspaceBuilder } from "../hooks/useWorkspaceBuilder";
import { CatalogPanel } from "./CatalogPanel";
import { LifestyleZones } from "./LifestyleZones";
import { OrderSummary } from "./OrderSummary";
import { RentModal } from "./RentModal";
import { SiteHeader } from "./SiteHeader";
import { Visualizer } from "./Visualizer";

export function WorkspaceBuilder() {
  const {
    activeLifestyleItems,
    closeRentModal,
    currentAccessories,
    currentChair,
    currentDesk,
    deliveryArea,
    isRentModalOpen,
    minDate,
    needBy,
    openRentModal,
    selectedAccessories,
    selectedChair,
    selectedDesk,
    selectedLifestyle,
    setDeliveryArea,
    setNeedBy,
    setSelectedChair,
    setSelectedDesk,
    setTab,
    tab,
    toggleAccessory,
    toggleLifestyle,
    totalMonthlyPrice,
  } = useWorkspaceBuilder();

  return (
    <div className="min-h-screen bg-background">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <SiteHeader deliveryArea={deliveryArea} onDeliveryAreaChange={setDeliveryArea} />

      <main id="main" className="mx-auto max-w-[1600px] px-4 py-4 lg:px-6 lg:py-5">
        <div className="grid items-stretch gap-4 xl:grid-cols-[minmax(280px,340px)_minmax(0,1fr)_minmax(280px,360px)] xl:h-[calc(100vh-6.5rem)]">
          <CatalogPanel
            tab={tab}
            onTabChange={setTab}
            selectedDesk={selectedDesk}
            selectedChair={selectedChair}
            selectedAccessories={selectedAccessories}
            onSelectDesk={setSelectedDesk}
            onSelectChair={setSelectedChair}
            onToggleAccessory={toggleAccessory}
          />
          <Visualizer
            currentDesk={currentDesk}
            currentChair={currentChair}
            selectedAccessories={selectedAccessories}
            selectedLifestyle={selectedLifestyle}
            totalMonthlyPrice={totalMonthlyPrice}
          />
          <OrderSummary
            currentDesk={currentDesk}
            currentChair={currentChair}
            accessories={currentAccessories}
            lifestyleItems={activeLifestyleItems}
            totalMonthlyPrice={totalMonthlyPrice}
            needBy={needBy}
            onNeedByChange={setNeedBy}
            minDate={minDate}
            deliveryArea={deliveryArea}
            onRemoveAccessory={toggleAccessory}
            onRemoveLifestyle={toggleLifestyle}
            onRemoveDesk={() => setSelectedDesk(null)}
            onRemoveChair={() => setSelectedChair(null)}
            onOpenRentModal={openRentModal}
          />
        </div>

        <LifestyleZones
          selectedLifestyle={selectedLifestyle}
          onToggleLifestyle={toggleLifestyle}
        />

        <section
          id="how-it-works"
          className="mx-auto mt-6 max-w-3xl scroll-mt-24 pb-12 text-center"
        >
          <h2 className="text-heading text-2xl font-extrabold text-stone-900">
            How It Works
          </h2>
          <ol className="mt-6 grid gap-4 text-left sm:grid-cols-3">
            <li className="rounded-2xl border border-stone-100 bg-card p-4 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wider text-accent">1</p>
              <h3 className="mt-1 font-bold text-stone-900">Build Your Setup</h3>
              <p className="mt-1 text-sm text-muted">
                Pick a chair, desk, monitors, and add-ons. The preview updates instantly.
              </p>
            </li>
            <li className="rounded-2xl border border-stone-100 bg-card p-4 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wider text-accent">2</p>
              <h3 className="mt-1 font-bold text-stone-900">Choose Your Date</h3>
              <p className="mt-1 text-sm text-muted">
                Tell us when you land. We deliver, place, and assemble across Bali.
              </p>
            </li>
            <li className="rounded-2xl border border-stone-100 bg-card p-4 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wider text-accent">3</p>
              <h3 className="mt-1 font-bold text-stone-900">Work From Day One</h3>
              <p className="mt-1 text-sm text-muted">
                Swap pieces anytime or cancel with zero long-term commitment.
              </p>
            </li>
          </ol>
        </section>
      </main>

      <RentModal
        isOpen={isRentModalOpen}
        onClose={closeRentModal}
        currentDesk={currentDesk}
        currentChair={currentChair}
        accessories={currentAccessories}
        lifestyleItems={activeLifestyleItems}
        totalMonthlyPrice={totalMonthlyPrice}
        needBy={needBy}
        deliveryArea={deliveryArea}
      />
    </div>
  );
}