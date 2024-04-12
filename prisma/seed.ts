import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt'
import dayjs from "dayjs";
const prisma = new PrismaClient();

async function main() {
    
    const week = getWeek()
    const hashpassword = await bcrypt.hash('12345678', 10)
    const user1 = await prisma.user.create({
        data: {
            email: 'gabs@email.com',
            password: hashpassword,
            name: 'Gabrielle',
            updatedAt: dayjs().format('YYYY-MM-DD')
        }
    })

    const u1Workout1 = await prisma.workout.create({
        data:
        {
            userId: user1.id,
            name: 'Membros Superiores',
            updatedAt: dayjs().format('YYYY-MM-DD')

        },
    })

    const u1W1Exercise1 = await prisma.exercise.create({
        data: {
            sets: '3x12',
            name: 'Supino Máquina',
            workoutId: u1Workout1.id,
            updatedAt: dayjs().format('YYYY-MM-DD')
        }
    })
    await prisma.execution.createMany({
        data:
            [
                {
                    exerciseId: u1W1Exercise1.id,
                    reps: 10,
                    weight: 5,
                    updatedAt: week[4]
                },
                {
                    exerciseId: u1W1Exercise1.id,
                    reps: 8,
                    weight: 5,
                    updatedAt: week[4]
                },
                {
                    exerciseId: u1W1Exercise1.id,
                    reps: 7,
                    weight: 5,
                    updatedAt: week[4]
                }
            ]

    })
    const u1W1Exercise2 = await prisma.exercise.create({
        data: {
            sets: '3x12',
            name: 'Triceps Polia',
            workoutId: u1Workout1.id,
            updatedAt: dayjs().format('YYYY-MM-DD')
        }
    })
    await prisma.execution.createMany({
        data:
            [
                {
                    exerciseId: u1W1Exercise2.id,
                    reps: 10,
                    weight: 15,
                    updatedAt: week[4]
                },
                {
                    exerciseId: u1W1Exercise2.id,
                    reps: 8,
                    weight: 15,
                    updatedAt: week[4]
                },
                {
                    exerciseId: u1W1Exercise2.id,
                    reps: 7,
                    weight: 15,
                    updatedAt: week[4]
                }
            ]

    })
    const u1W1Exercise3 = await prisma.exercise.create({
        data: {
            sets: '3x12',
            name: 'Pulley Frente',
            workoutId: u1Workout1.id,
            updatedAt: dayjs().format('YYYY-MM-DD')
        }
    })
    await prisma.execution.createMany({
        data:
            [
                {
                    exerciseId: u1W1Exercise3.id,
                    reps: 10,
                    weight: 25,
                    updatedAt: week[4]
                },
                {
                    exerciseId: u1W1Exercise3.id,
                    reps: 8,
                    weight: 25, 
                    updatedAt: week[4]
                },
                {
                    exerciseId: u1W1Exercise3.id,
                    reps: 7,
                    weight: 25, 
                    updatedAt: week[4]
                }
            ]

    })
    const u1W1Exercise4 = await prisma.exercise.create({
        data: {
            sets: '3x12',
            name: 'Rosca Direta',
            workoutId: u1Workout1.id,
            updatedAt: dayjs().format('YYYY-MM-DD')
        }
    })
    await prisma.execution.createMany({
        data:
            [
                {
                    exerciseId: u1W1Exercise4.id,
                    reps: 10,
                    weight: 5,
                    updatedAt:week[4]
                },
                {
                    exerciseId: u1W1Exercise4.id,
                    reps: 8,
                    weight: 5,
                    updatedAt:week[4]
                },
                {
                    exerciseId: u1W1Exercise4.id,
                    reps: 7,
                    weight: 5,
                    updatedAt:week[4]
                }
            ]

    })
    const u1W1Exercise5 = await prisma.exercise.create({
        data: {
            sets: '3x12',
            name: 'Elevação lateral',
            workoutId: u1Workout1.id,
            updatedAt: dayjs().format('YYYY-MM-DD')
        }
    })
    await prisma.execution.createMany({
        data:
            [
                {
                    exerciseId: u1W1Exercise5.id,
                    reps: 10,
                    weight: 5,
                    updatedAt:week[4]
                },
                {
                    exerciseId: u1W1Exercise5.id,
                    reps: 8,
                    weight: 5,
                    updatedAt:week[4]
                },
                {
                    exerciseId: u1W1Exercise5.id,
                    reps: 7,
                    weight: 5,
                    updatedAt:week[4]
                }
            ]

    })

    await prisma.history.create({
        data: {
            updatedAt:week[4],
            workoutId: u1Workout1.id
        }
    })
    const u1Workout2 = await prisma.workout.create({
        data:
        {
            userId: user1.id,
            name: 'Membros Inferiores',
            updatedAt: dayjs().format('YYYY-MM-DD'),
        },
    })

    const u1W2Exercise1 = await prisma.exercise.create({
        data: {
            updatedAt: dayjs().format('YYYY-MM-DD'),
            sets: '3x12',
            name: 'Agachamento Hack',
            workoutId: u1Workout2.id,

        }
    })
    await prisma.execution.createMany({
        data:
            [
                {
                    exerciseId: u1W2Exercise1.id,
                    reps: 12,
                    weight: 10,
                    updatedAt:week[3]
                },
                {
                    exerciseId: u1W2Exercise1.id,
                    reps: 10,
                    weight: 10,
                    updatedAt:week[3]
                },
                {
                    exerciseId: u1W2Exercise1.id,
                    reps: 9,
                    weight: 10,
                    updatedAt:week[3]
                }
            ]

    })
    const u1W2Exercise2 = await prisma.exercise.create({
        data: {
            updatedAt: dayjs().format('YYYY-MM-DD'),
            sets: '3x12',
            name: 'Leg Press',
            workoutId: u1Workout2.id
        }
    })
    await prisma.execution.createMany({
        data:
            [
                {
                    exerciseId: u1W2Exercise2.id,
                    reps: 12,
                    weight: 20,
                    updatedAt:week[3]
                },
                {
                    exerciseId: u1W2Exercise2.id,
                    reps: 10,
                    weight: 20,
                    updatedAt:week[3]
                },
                {
                    exerciseId: u1W2Exercise2.id,
                    reps: 7,
                    weight: 20,
                    updatedAt:week[3]
                }
            ]

    })
    const u1W2Exercise3 = await prisma.exercise.create({
        data: {
            updatedAt: dayjs().format('YYYY-MM-DD'),
            sets: '3x12',
            name: 'Cadeira Flexora',
            workoutId: u1Workout2.id
        }
    })
    await prisma.execution.createMany({
        data:
            [
                {
                    exerciseId: u1W2Exercise3.id,
                    reps: 12,
                    weight: 30,
                    updatedAt:week[3]
                },
                {
                    exerciseId: u1W2Exercise3.id,
                    reps: 12,
                    weight: 30,
                    updatedAt:week[3]
                },
                {
                    exerciseId: u1W2Exercise3.id,
                    reps: 12,
                    weight: 30,
                    updatedAt:week[3]
                }
            ]

    })
    const u1W2Exercise4 = await prisma.exercise.create({
        data: {
            updatedAt: dayjs().format('YYYY-MM-DD'),
            sets: '3x12',
            name: 'Cadeira Extensora',
            workoutId: u1Workout2.id,
            Execution: {

            }
        }
    })
    await prisma.execution.createMany({
        data:
            [
                {
                    exerciseId: u1W2Exercise4.id,
                    reps: 12,
                    weight: 35,
                    updatedAt:week[3]
                },
                {
                    exerciseId: u1W2Exercise4.id,
                    reps: 11,
                    weight: 35,
                    updatedAt:week[3]
                },
                {
                    exerciseId: u1W2Exercise4.id,
                    reps: 9,
                    weight: 35,
                    updatedAt:week[3]
                }
            ]

    })
    const u1W2Exercise5 = await prisma.exercise.create({
        data: {
            updatedAt: dayjs().format('YYYY-MM-DD'),
            sets: '3x12',
            name: 'Panturrilha Sentado',
            workoutId: u1Workout2.id
        }
    })
    await prisma.execution.createMany({
        data:
            [
                {
                    exerciseId: u1W2Exercise5.id,
                    reps: 11,
                    weight: 10,
                    updatedAt:week[3]
                },
                {
                    exerciseId: u1W2Exercise5.id,
                    reps: 10,
                    weight: 10,
                    updatedAt:week[3]
                },
                {
                    exerciseId: u1W2Exercise5.id,
                    reps: 9,
                    weight: 10,
                    updatedAt:week[3]
                }
            ]

    })

    await prisma.history.create({
        data: {
            updatedAt:week[3],
            workoutId: u1Workout2.id
        }
    })
    const u1Workout3 = await prisma.workout.create({
        data:
        {
            userId: user1.id,
            name: 'Superiores',
            updatedAt: dayjs().format('YYYY-MM-DD')

        },
    })

    const u1W3Exercise1 = await prisma.exercise.create({
        data: {
            updatedAt: dayjs().format('YYYY-MM-DD'),
            sets: '3x12',
            name: 'Pulley Aberto',
            workoutId: u1Workout3.id
        }
    })
    await prisma.execution.createMany({
        data:
            [
                {
                    exerciseId: u1W3Exercise1.id,
                    reps: 10,
                    weight: 35,
                    updatedAt:week[2]
                },
                {
                    exerciseId: u1W3Exercise1.id,
                    reps: 10,
                    weight: 35,
                    updatedAt:week[2]
                },
                {
                    exerciseId: u1W3Exercise1.id,
                    reps: 10,
                    weight: 35,
                    updatedAt:week[2]
                }
            ]

    })
    const u1W3Exercise2 = await prisma.exercise.create({
        data: {
            updatedAt: dayjs().format('YYYY-MM-DD'),
            sets: '3x12',
            name: 'Pulley Supinado',
            workoutId: u1Workout3.id
        }
    })
    await prisma.execution.createMany({
        data:
            [
                {
                    exerciseId: u1W3Exercise2.id,
                    reps: 10,
                    weight: 30,
                    updatedAt:week[2]
                },
                {
                    exerciseId: u1W3Exercise2.id,
                    reps: 8,
                    weight: 30,
                    updatedAt:week[2]
                },
                {
                    exerciseId: u1W3Exercise2.id,
                    reps: 8,
                    weight: 30,
                    updatedAt:week[2]
                }
            ]

    })
    const u1W3Exercise3 = await prisma.exercise.create({
        data: {
            updatedAt: dayjs().format('YYYY-MM-DD'),
            sets: '3x12',
            name: 'Elevação Lateral',
            workoutId: u1Workout3.id
        }
    })
    await prisma.execution.createMany({
        data:
            [
                {
                    exerciseId: u1W3Exercise3.id,
                    reps: 12,
                    weight: 7,
                    updatedAt:week[2]
                },
                {
                    exerciseId: u1W3Exercise3.id,
                    reps: 10,
                    weight: 7,
                    updatedAt:week[2]
                },
                {
                    exerciseId: u1W3Exercise3.id,
                    reps: 8,
                    weight: 7,
                    updatedAt:week[2]
                }
            ]

    })
    const u1W3Exercise4 = await prisma.exercise.create({
        data: {
            updatedAt: dayjs().format('YYYY-MM-DD'),
            sets: '3x12',
            name: 'Rosca Direta',
            workoutId: u1Workout3.id,
            Execution: {

            }
        }
    })
    await prisma.execution.createMany({
        data:
            [
                {
                    exerciseId: u1W3Exercise4.id,
                    reps: 12,
                    weight: 8,
                    updatedAt:week[2]
                },
                {
                    exerciseId: u1W3Exercise4.id,
                    reps: 10,
                    weight: 8,
                    updatedAt:week[2]
                },
                {
                    exerciseId: u1W3Exercise4.id,
                    reps: 7,
                    weight: 8,
                    updatedAt:week[2]
                }
            ]

    })
    const u1W3Exercise5 = await prisma.exercise.create({
        data: {
            updatedAt: dayjs().format('YYYY-MM-DD'),
            sets: '3x12',
            name: 'Supino Inclinado',
            workoutId: u1Workout3.id
        }
    })
    await prisma.execution.createMany({
        data:
            [
                {
                    exerciseId: u1W3Exercise5.id,
                    reps: 12,
                    weight: 10,
                    updatedAt:week[2]
                },
                {
                    exerciseId: u1W3Exercise5.id,
                    reps: 7,
                    weight: 10,
                    updatedAt:week[2]
                },
                {
                    exerciseId: u1W3Exercise5.id,
                    reps: 7,
                    weight: 10,
                    updatedAt:week[2]
                }
            ]

    })
    const u1W3Exercise6 = await prisma.exercise.create({
        data: {
            updatedAt: dayjs().format('YYYY-MM-DD'),
            sets: '3x12',
            name: 'Triceps Polia',
            workoutId: u1Workout3.id
        }
    })
    await prisma.execution.createMany({
        data:
            [
                {
                    exerciseId: u1W3Exercise6.id,
                    reps: 12,
                    weight: 25,
                    updatedAt:week[2]
                },
                {
                    exerciseId: u1W3Exercise6.id,
                    reps: 10,
                    weight: 25,
                    updatedAt:week[2]
                },
                {
                    exerciseId: u1W3Exercise6.id,
                    reps: 9,
                    weight: 25,
                    updatedAt:week[2]
                }
            ]

    })
    const u1W3Exercis7 = await prisma.exercise.create({
        data: {
            updatedAt: dayjs().format('YYYY-MM-DD'),
            sets: '3x12',
            name: 'Triceps Frances',
            workoutId: u1Workout3.id
        }
    })
    await prisma.execution.createMany({
        data:
            [
                {
                    exerciseId: u1W3Exercis7.id,
                    reps: 10,
                    weight: 25,
                    updatedAt:week[2]
                },
                {
                    exerciseId: u1W3Exercis7.id,
                    reps: 10,
                    weight: 25,
                    updatedAt:week[2]
                },
                {
                    exerciseId: u1W3Exercis7.id,
                    reps: 7,
                    weight: 5,
                    updatedAt:week[2]
                }
            ]

    })
    await prisma.history.create({
        data: {
            updatedAt:week[2],
            workoutId: u1Workout3.id
        }
    })
    //
    const u1Workout4 = await prisma.workout.create({
        data:
        {
            userId: user1.id,
            name: 'Inferiores 1',
            updatedAt: dayjs().format('YYYY-MM-DD')

        },
    })

    const u1W4Exercise1 = await prisma.exercise.create({
        data: {
            updatedAt: dayjs().format('YYYY-MM-DD'),
            sets: '3x12',
            name: 'Agachamento Hack',
            workoutId: u1Workout4.id
        }
    })
    await prisma.execution.createMany({
        data:
            [
                {
                    exerciseId: u1W4Exercise1.id,
                    reps: 12,
                    weight: 20,
                    updatedAt:week[1]
                },
                {
                    exerciseId: u1W4Exercise1.id,
                    reps: 12,
                    weight: 20,
                    updatedAt:week[1]
                },
                {
                    exerciseId: u1W4Exercise1.id,
                    reps: 10,
                    weight: 20,
                    updatedAt:week[1]
                }
            ]

    })
    const u1W4Exercise2 = await prisma.exercise.create({
        data: {
            updatedAt: dayjs().format('YYYY-MM-DD'),
            sets: '3x12',
            name: 'Leg Press',
            workoutId: u1Workout4.id
        }
    })
    await prisma.execution.createMany({
        data:
            [
                {
                    exerciseId: u1W4Exercise2.id,
                    reps: 10,
                    weight: 45,
                    updatedAt:week[1]
                },
                {
                    exerciseId: u1W4Exercise2.id,
                    reps: 10,
                    weight: 45,
                    updatedAt:week[1]
                },
                {
                    exerciseId: u1W4Exercise2.id,
                    reps: 10,
                    weight: 45,
                    updatedAt:week[1]
                }
            ]

    })
    const u1W4Exercise3 = await prisma.exercise.create({
        data: {
            updatedAt: dayjs().format('YYYY-MM-DD'),
            sets: '3x12',
            name: 'Afundo',
            workoutId: u1Workout4.id
        }
    })
    await prisma.execution.createMany({
        data:
            [
                {
                    exerciseId: u1W4Exercise3.id,
                    reps: 12,
                    weight: 10,
                    updatedAt:week[1]
                },
                {
                    exerciseId: u1W4Exercise3.id,
                    reps: 10,
                    weight: 10,
                    updatedAt:week[1]
                },
                {
                    exerciseId: u1W4Exercise3.id,
                    reps: 10,
                    weight: 10,
                    updatedAt:week[1]
                }
            ]

    })
    const u1W4Exercise4 = await prisma.exercise.create({
        data: {
            updatedAt: dayjs().format('YYYY-MM-DD'),
            sets: '3x12',
            name: 'Cadeira Extensora',
            workoutId: u1Workout4.id,
            Execution: {

            }
        }
    })
    await prisma.execution.createMany({
        data:
            [
                {
                    exerciseId: u1W4Exercise4.id,
                    reps: 12,
                    weight: 45,
                    updatedAt:week[1]
                },
                {
                    exerciseId: u1W4Exercise4.id,
                    reps: 12,
                    weight: 45,
                    updatedAt:week[1]
                },
                {
                    exerciseId: u1W4Exercise4.id,
                    reps: 10,
                    weight: 45,
                    updatedAt:week[1]
                }
            ]

    })
    const u1W4Exercise5 = await prisma.exercise.create({
        data: {
            updatedAt: dayjs().format('YYYY-MM-DD'),
            sets: '3x12',
            name: 'Panturrilha Maquina',
            workoutId: u1Workout4.id
        }
    })
    await prisma.execution.createMany({
        data:
            [
                {
                    exerciseId: u1W4Exercise5.id,
                    reps: 10,
                    weight: 12,
                    updatedAt:week[1]
                },
                {
                    exerciseId: u1W4Exercise5.id,
                    reps: 10,
                    weight: 12,
                    updatedAt:week[1]
                },
                {
                    exerciseId: u1W4Exercise5.id,
                    reps: 9,
                    weight: 12,
                    updatedAt:week[1]
                }
            ]

    })
    const u1W4Exercise6 = await prisma.exercise.create({
        data: {
            updatedAt: dayjs().format('YYYY-MM-DD'),
            sets: '3x12',
            name: 'Panturrilha Sentado',
            workoutId: u1Workout4.id
        }
    })
    await prisma.execution.createMany({
        data:
            [
                {
                    exerciseId: u1W4Exercise6.id,
                    reps: 12,
                    weight: 15,
                    updatedAt:week[1]
                },
                {
                    exerciseId: u1W4Exercise6.id,
                    reps: 12,
                    weight: 15,
                    updatedAt:week[1]
                },
                {
                    exerciseId: u1W4Exercise6.id,
                    reps: 9,
                    weight: 15,
                    updatedAt:week[1]
                }
            ]

    })
    const u1W4Exercise7 = await prisma.exercise.create({
        data: {
            updatedAt: dayjs().format('YYYY-MM-DD'),
            sets: '3x12',
            name: 'Abdominal Maquina',
            workoutId: u1Workout4.id
        }
    })
    await prisma.execution.createMany({
        data:
            [
                {
                    exerciseId: u1W4Exercise7.id,
                    reps: 12,
                    weight: 15,
                    updatedAt:week[1]
                },
                {
                    exerciseId: u1W4Exercise7.id,
                    reps: 12,
                    weight: 15,
                    updatedAt:week[1]
                },
                {
                    exerciseId: u1W4Exercise7.id,
                    reps: 12,
                    weight: 15,
                    updatedAt:week[1]
                }
            ]

    })
    await prisma.history.create({
        data: {
            updatedAt: week[1],
            workoutId: u1Workout4.id
        }
    })
    //
    const u1Workout5 = await prisma.workout.create({
        data:
        {
            userId: user1.id,
            name: 'Inferiores 2',
            updatedAt: dayjs().format('YYYY-MM-DD')

        },
    })
    const u1W5Exercise1 = await prisma.exercise.create({
        data: {
            updatedAt: dayjs().format('YYYY-MM-DD'),
            sets: '4x12',
            name: 'Flexor Deitado',
            workoutId: u1Workout5.id
        }
    })
    await prisma.execution.createMany({
        data:
            [
                {
                    exerciseId: u1W5Exercise1.id,
                    reps: 10,
                    weight: 35,
                    updatedAt:week[0]
                    
                },
                {
                    exerciseId: u1W5Exercise1.id,
                    reps: 10,
                    weight: 35,
                    updatedAt:week[0]
                },
                {
                    exerciseId: u1W5Exercise1.id,
                    reps: 10,
                    weight: 35,
                    updatedAt:week[0]
                },
                {
                    exerciseId: u1W5Exercise1.id,
                    reps: 8,
                    weight: 35,
                    updatedAt:week[0]
                }
            ]

    })
    const u1W5Exercise2 = await prisma.exercise.create({
        data: {
            updatedAt: dayjs().format('YYYY-MM-DD'),
            sets: '4x12',
            name: 'Cadeira Flexora',
            workoutId: u1Workout5.id
        }
    })
    await prisma.execution.createMany({
        data:
            [
                {
                    exerciseId: u1W5Exercise2.id,
                    reps: 10,
                    weight: 35,
                    updatedAt:week[0]
                },
                {
                    exerciseId: u1W5Exercise2.id,
                    reps: 10,
                    weight: 35,
                    updatedAt:week[0]
                },
                {
                    exerciseId: u1W5Exercise2.id,
                    reps: 10,
                    weight: 35,
                    updatedAt:week[0]
                },
                {
                    exerciseId: u1W5Exercise2.id,
                    reps: 10,
                    weight: 35,
                    updatedAt:week[0]
                }
            ]

    })
    const u1W5Exercise3 = await prisma.exercise.create({
        data: {
            updatedAt: dayjs().format('YYYY-MM-DD'),
            sets: '3x12',
            name: 'Stiff',
            workoutId: u1Workout5.id
        }
    })
    await prisma.execution.createMany({
        data:
            [
                {
                    exerciseId: u1W5Exercise3.id,
                    reps: 10,
                    weight: 10,
                    updatedAt:week[0]
                },
                {
                    exerciseId: u1W5Exercise3.id,
                    reps: 10,
                    weight: 10,
                    updatedAt:week[0]
                },
                {
                    exerciseId: u1W5Exercise3.id,
                    reps: 9,
                    weight: 10,
                    updatedAt:week[0]
                }
            ]

    })
    const u1W5Exercise4 = await prisma.exercise.create({
        data: {
            updatedAt: dayjs().format('YYYY-MM-DD'),
            sets: '3x12',
            name: 'Abdução Polia',
            workoutId: u1Workout5.id,
            Execution: {

            }
        }
    })
    await prisma.execution.createMany({
        data:
            [
                {
                    exerciseId: u1W5Exercise4.id,
                    reps: 10,
                    weight: 5,
                    updatedAt:week[0]
                },
                {
                    exerciseId: u1W5Exercise4.id,
                    reps: 10,
                    weight: 5,
                    updatedAt:week[0]
                },
                {
                    exerciseId: u1W5Exercise4.id,
                    reps: 10,
                    weight: 5,
                    updatedAt:week[0]
                }
            ]

    })
    const u1W5Exercise5 = await prisma.exercise.create({
        data: {
            updatedAt: dayjs().format('YYYY-MM-DD'),
            sets: '3x12',
            name: 'Gluteo Polia',
            workoutId: u1Workout5.id
        }
    })
    await prisma.execution.createMany({
        data:
            [
                {
                    exerciseId: u1W5Exercise5.id,
                    reps: 10,
                    weight: 10,
                    updatedAt:week[0]
                },
                {
                    exerciseId: u1W5Exercise5.id,
                    reps: 11,
                    weight: 10,
                    updatedAt:week[0]
                },
                {
                    exerciseId: u1W5Exercise5.id,
                    reps: 9,
                    weight: 10,
                    updatedAt:week[0]
                }
            ]

    })
    const u1W5Exercise6 = await prisma.exercise.create({
        data: {
            updatedAt: dayjs().format('YYYY-MM-DD'),
            sets: '3x12',
            name: 'Elevação Pelvica',
            workoutId: u1Workout5.id
        }
    })
    await prisma.execution.createMany({
        data:
            [
                {
                    exerciseId: u1W5Exercise6.id,
                    reps: 12,
                    weight: 20,
                    updatedAt:week[0]
                },
                {
                    exerciseId: u1W5Exercise6.id,
                    reps: 12,
                    weight: 20,
                    updatedAt:week[0]
                },
                {
                    exerciseId: u1W5Exercise6.id,
                    reps: 12,
                    weight: 25,
                    updatedAt:week[0]
                }
            ]

    })
    await prisma.history.create({
        data: {
            updatedAt:week[0],
            workoutId: u1Workout5.id,
        }
    })


    await prisma.workout.update({
        where: {
            id: u1Workout1.id
        },
        data: {
            updatedAt: dayjs().format('YYYY-MM-DD'),
            isActive: false
        }
    })
    await prisma.workout.update({
        where: {
            id: u1Workout2.id
        },
        data: {
            isActive: false,
            updatedAt: dayjs().format('YYYY-MM-DD')
        }
    })
    console.log('Seeding sucess')
}

function getWeek() {
    let week: string[] = []
    for (let i = 1; i <=5; i++) {
        const day = dayjs().subtract(i, 'days').format('YYYY-MM-DD')
        week.push(day)
    }
    return week;
}


// -npm i
// -npm run migration run
main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

