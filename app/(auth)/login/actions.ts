"use server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { ApiResponse } from "@/lib/types";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function updateUserToAdmin(): Promise<ApiResponse> {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return redirect("/login");
  }

  try {
    await prisma.user.update({
      where: {
        id: session.user.id,
      },
      data: {
        role: "admin",
      },
    });

    return {
      status: "sucess",
      message: "feito",
    };
  } catch (e) {
    console.log(e);
    return {
      status: "error",
      message: "",
    };
  }
}
