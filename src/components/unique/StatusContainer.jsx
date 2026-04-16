import StatusCard from "./StatusCard";

export default function StatusContainer() {
    return (
        <div className="grid grid-cols-4 gap-6 mt-10">
            <StatusCard number="10" text="Total Friends"></StatusCard>
            <StatusCard number="3" text="On Track"></StatusCard>
            <StatusCard number="6" text="Needed Attention"></StatusCard>
            <StatusCard number="12" text="Interactions This Month"></StatusCard>
        </div>
    )
}