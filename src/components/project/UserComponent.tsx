"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Progress } from "@/components/ui/progress";

function UserComponent() {
    const { data, status } = useSession();
    const [progress, setProgress] = useState(22);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setProgress(99);
            setLoading(false);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <Progress value={progress} className="w-[60%]" />;

    if (status === "loading") return <Progress value={progress} className="w-[60%]" />;

    if (!data) return <div>No user data available.</div>;

    const { email, firstName, lastName } = data.user;

    return (
        <Card className="w-72">
            <CardHeader>
                <CardTitle className="text-2xl font-semibold">Bienvenido</CardTitle>
            </CardHeader>
            <CardContent>
                <h2>{firstName} {lastName}</h2>
                <p>Email: {email}</p>
            </CardContent>
        </Card>
    );
}

export default UserComponent;