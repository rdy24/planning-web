import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Card, CardContent, CardHeader } from '@/Components/ui/card';
import GuestLayout from '@/Layouts/GuestLayout';
import { Link, useForm } from '@inertiajs/react';
import { useEffect } from 'react';

export default function ResetPassword({ token, email }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('password.store'));
    };

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <Card>
                    <CardHeader>
                        <Link href="/" className="text-4xl font-black leading-relaxed tracking-tighter">
                            Plannify<span className="text-red-500">.</span>
                        </Link>
                    </CardHeader>
                    <CardContent>
                        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form className="space-y-6" onSubmit={submit}>
                                {/* form */}
                                <div>
                                    <InputLabel htmlFor="email" value="Email" />
                                    <TextInput
                                        id="email"
                                        type="email"
                                        className="mt-1 block w-full"
                                        value={data.email}
                                        onchange={(e) => setData('email', e.target.value)}
                                        onErrors={
                                            errors.email && <InputError message={errors.email} className="mt-2" />
                                        }
                                    />
                                </div>
                                <div>
                                    <InputLabel htmlFor="password" value="Password" />
                                    <TextInput
                                        id="password"
                                        type="password"
                                        className="mt-1 block w-full"
                                        value={data.password}
                                        onchange={(e) => setData('password', e.target.value)}
                                        onErrors={
                                            errors.password && <InputError message={errors.password} className="mt-2" />
                                        }
                                    />
                                </div>
                                <div>
                                    <InputLabel htmlFor="password_confirmation" value="Password Confirmation" />
                                    <TextInput
                                        id="password_confirmation"
                                        type="password"
                                        className="mt-1 block w-full"
                                        value={data.password_confirmation}
                                        onchange={(e) => setData('password_confirmation', e.target.value)}
                                        onErrors={
                                            errors.password_confirmation && (
                                                <InputError message={errors.password_confirmation} className="mt-2" />
                                            )
                                        }
                                    />
                                </div>
                                <div>
                                    <Button className="w-full" disabled={processing} variant="red" type="submit">
                                        Reset Password
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

ResetPassword.layout = (page) => <GuestLayout children={page} title="Reset Password" />;
