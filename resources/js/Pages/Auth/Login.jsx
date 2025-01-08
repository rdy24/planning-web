import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Button } from '@/Components/ui/button';
import { Card, CardContent, CardHeader } from '@/Components/ui/card';
import GuestLayout from '@/Layouts/GuestLayout';
import { Link, useForm } from '@inertiajs/react';
import { useEffect } from 'react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout title="Login">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <Card>
                        <CardHeader>
                            <Link href="/" className="text-4xl font-black leading-relaxed tracking-tighter">
                                Plannify<span className="text-red-500">.</span>
                            </Link>
                            <h2 className="text-left text-lg font-medium leading-relaxed tracking-tight text-muted-foreground">
                                Sign in to your account
                            </h2>
                        </CardHeader>
                        <CardContent>
                            <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                                {status && <div className="mb-4 text-sm font-medium text-green-600">{status}</div>}
                                <form className="space-y-6" onSubmit={submit}>
                                    {/* form */}
                                    <div>
                                        <InputLabel htmlFor="email" value="Email"></InputLabel>
                                        <TextInput
                                            id="email"
                                            type="email"
                                            name="email"
                                            value={data.email}
                                            className="mt-1 block w-full"
                                            isFocused={true}
                                            onChange={(e) => setData('email', e.target.value)}
                                            onErrors={
                                                errors.email && <InputError message={errors.email} className="mt-2" />
                                            }
                                        />
                                    </div>
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <InputLabel htmlFor="password" value="Password"></InputLabel>
                                            {canResetPassword && (
                                                <div>
                                                    <Link
                                                        href={route('password.request')}
                                                        className="font-semibold leading-6 text-red-500 hover:text-red-600"
                                                    >
                                                        Forgot Password?
                                                    </Link>
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            <TextInput
                                                id="password"
                                                type="password"
                                                name="password"
                                                value={data.password}
                                                className="mt-1 block w-full"
                                                onChange={(e) => setData('password', e.target.value)}
                                                onErrors={
                                                    errors.password && (
                                                        <InputError message={errors.password} className="mt-2" />
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-4 block">
                                        <label htmlFor="remember" className="flex items-center">
                                            <Checkbox
                                                id="remember"
                                                name="remember"
                                                checked={data.remember}
                                                onChange={(e) => setData('remember', e.target.checked)}
                                            />
                                            <span className="ms-2 text-sm text-muted-foreground">Remember Me</span>
                                        </label>
                                    </div>
                                    <div>
                                        <Button className="w-full" disabled={processing} type="submit" variant="red">
                                            Login
                                        </Button>
                                    </div>
                                </form>

                                <p className="mt-10 text-center text-sm text-muted-foreground">
                                    Not a member?{' '}
                                    <Link
                                        href={route('register')}
                                        className="font-semibold leading-6 text-red-500 hover:text-red-600"
                                    >
                                        Register
                                    </Link>
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </GuestLayout>
    );
}
