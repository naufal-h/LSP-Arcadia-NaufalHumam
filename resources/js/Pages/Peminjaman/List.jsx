import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { Add, OpenInNew } from "@mui/icons-material";
import {
    Card,
    CardActions,
    CardContent,
    IconButton,
    Typography,
} from "@mui/material";

export default function Dashboard({ auth, peminjaman }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Daftar Peminjaman
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {peminjaman.map((peminjaman) => (
                                    <Card
                                        variant="outlined"
                                        key={peminjaman.id}
                                    >
                                        <CardContent>
                                            <Typography
                                                sx={{ fontSize: 14 }}
                                                color="text.secondary"
                                                gutterBottom
                                            >
                                                Peminjaman #{peminjaman.id}
                                            </Typography>
                                            <Typography
                                                variant="h5"
                                                component="div"
                                            >
                                                Tanggal Peminjaman :{" "}
                                                {new Date(
                                                    peminjaman.tanggal_pinjam
                                                ).toLocaleDateString()}
                                            </Typography>
                                            <Typography
                                                sx={{ mb: 1.5 }}
                                                color="text.secondary"
                                            >
                                                Tanggal Wajib Kembali :{" "}
                                                {new Date(
                                                    peminjaman.tanggal_wajib_kembali
                                                ).toLocaleDateString()}
                                            </Typography>
                                            <Typography variant="body2">
                                                Status : {peminjaman.status}
                                            </Typography>
                                        </CardContent>
                                        <CardActions
                                            sx={{ justifyContent: "flex-end" }}
                                        >
                                            <IconButton
                                                aria-label="add"
                                                color="primary"
                                                href={route(
                                                    "peminjaman.detail",
                                                    peminjaman.id
                                                )}
                                            >
                                                <OpenInNew />
                                            </IconButton>
                                        </CardActions>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
