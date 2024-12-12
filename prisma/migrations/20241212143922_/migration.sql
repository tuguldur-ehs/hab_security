-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('HAB', 'EMPLOYEE', 'BAI_ADMIN');

-- CreateTable
CREATE TABLE "users" (
    "user_id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "lastName" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "profilePhoto" TEXT,
    "role" "UserRole" NOT NULL DEFAULT 'EMPLOYEE',

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "hse_instructions" (
    "HSE_instruction_id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "photo_url" TEXT,
    "audio_url" TEXT,
    "employee_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "hse_instructions_pkey" PRIMARY KEY ("HSE_instruction_id")
);

-- CreateTable
CREATE TABLE "hse_compliance_history" (
    "compliance_id" SERIAL NOT NULL,
    "employee_id" INTEGER NOT NULL,
    "safety_gear_status" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "signature" TEXT NOT NULL,
    "HSE_instruction_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "hse_compliance_history_pkey" PRIMARY KEY ("compliance_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "hse_instructions" ADD CONSTRAINT "hse_instructions_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hse_compliance_history" ADD CONSTRAINT "hse_compliance_history_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hse_compliance_history" ADD CONSTRAINT "hse_compliance_history_HSE_instruction_id_fkey" FOREIGN KEY ("HSE_instruction_id") REFERENCES "hse_instructions"("HSE_instruction_id") ON DELETE RESTRICT ON UPDATE CASCADE;
