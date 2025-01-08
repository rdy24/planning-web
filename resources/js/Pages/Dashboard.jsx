import AppLayout from '@/Layouts/AppLayout';

export default function Dashboard() {
    return <div>Dashboard</div>;
}

Dashboard.layout = (page) => <AppLayout title="Dashboard" children={page}></AppLayout>;
