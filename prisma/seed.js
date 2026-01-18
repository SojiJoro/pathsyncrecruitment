// prisma/seed.js

/**
 * This seed script will:
 * 1) Ensure an Admin user exists (email = "admin@pathsyncrecruitment.com")
 * 2) Upsert a "DevOps Engineering Path" careerPath
 * 3) For each row in the DevOps curriculum (embedded below),
 *    upsert a Step (orderIndex based on the array order),
 *    upsert a Lesson (using the "Outcome" as the lesson body),
 *    and, if provided, upsert a Lab (with instructions, embedUrl, and starterRepo).
 *
 * To run:
 *   npx prisma db seed
 */

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  // 1) Ensure Admin user exists
  const adminEmail = 'admin@pathsyncrecruitment.com'
  let admin = await prisma.user.findUnique({ where: { email: adminEmail } })
  if (!admin) {
    admin = await prisma.user.create({
      data: {
        name: 'Admin User',
        email: adminEmail,
        role: 'admin',
        approved: true,
      },
    })
    console.log('Seed: Created Admin user')
  } else {
    console.log('Seed: Admin user already exists')
  }

  // 2) Upsert the DevOps career path
  const devOpsSlug = 'devops-path'
  let devOpsPath = await prisma.careerPath.findUnique({ where: { slug: devOpsSlug } })
  if (!devOpsPath) {
    devOpsPath = await prisma.careerPath.create({
      data: {
        title: 'DevOps Engineering Path',
        slug: devOpsSlug,
        description: 'A comprehensive path to become a DevOps engineer, from foundational tools to real-world projects.',
        createdBy: admin.id,
      },
    })
    console.log('Seed: Created CareerPath:', devOpsPath.slug)
  } else {
    console.log('Seed: CareerPath already exists:', devOpsPath.slug)
  }

  //
  // 3) Embed the DevOps curriculum as a JavaScript array.
  //    Each object corresponds to one row in DevOps_Curriculum.csv.
  //
  //  Columns in CSV: ["Stage", "Topic", "Outcome"]
  //  We also include a "Lab" field for certain topics; if Lab is null, no lab will be created.
  //
  const devOpsCurriculum = [
    {
      Stage: '1. Foundations',
      Topic: 'Linux Fundamentals',
      Outcome: 'Basic navigation, file permissions, and system administration tasks in Linux.',
      Lab: {
        title: 'Linux Permissions Lab',
        instructions: `
# Linux Permissions Lab

1. SSH into your Linux sandbox (or open a local terminal).  
2. Create a new file: \`touch example.txt\`.  
3. Change its permissions so that:
   - Owner can read & write  
   - Group can read only  
   - Others have no permissions  
   You can use: \`chmod 640 example.txt\`.  
4. Verify the permissions with: \`ls -l example.txt\`.  
5. Change the group ownership to \`staff\` (or another group available) and add execute permission for the owner:
   \`\`\`
   chown $USER:staff example.txt
   chmod u+x example.txt
   \`\`\`
6. Confirm again with \`ls -l example.txt\`.

**Hint**: \`chmod 640 example.txt\` sets permissions to \`-rw-r-----\`.
        `,
        embedUrl: null,
        starterRepo: null,
      },
    },
    {
      Stage: '1. Foundations',
      Topic: 'Networking Basics',
      Outcome: 'Understanding DNS, HTTP, firewalls, and common ports.',
      Lab: {
        title: 'Network Troubleshooting Lab',
        instructions: `
# Network Troubleshooting Lab

1. On your Linux sandbox, install \`nmap\` (if not already installed):
   \`\`\`
   sudo apt-get update
   sudo apt-get install -y nmap
   \`\`\`
2. Scan localhost ports 1-1000:
   \`\`\`
   nmap -p 1-1000 localhost
   \`\`\`
3. Identify which ports are open (e.g., SSH on port 22).  
4. Test connectivity to google.com:
   \`\`\`
   ping -c 4 google.com
   \`\`\`
5. Test DNS resolution using \`dig\`:
   \`\`\`
   sudo apt-get install -y dnsutils
   dig @8.8.8.8 example.com
   \`\`\`
6. If a firewall is running (e.g., \`ufw\`), check status:
   \`\`\`
   sudo ufw status
   \`\`\`

**Hint**: Use \`ping -c 4 <host>\` for four ICMP packets.
        `,
        embedUrl: null,
        starterRepo: null,
      },
    },
    {
      Stage: '1. Foundations',
      Topic: 'Git & GitHub',
      Outcome: 'Version control with Git: branching, merging, pull requests, and GitHub workflows.',
      Lab: {
        title: 'Git Basics Lab',
        instructions: `
# Git Basics Lab

1. Create a new directory and initialize a Git repository:
   \`\`\`
   mkdir git-lab
   cd git-lab
   git init
   \`\`\`
2. Create a file named \`README.md\` with a single line of text.  
3. Stage and commit the file:
   \`\`\`
   git add README.md
   git commit -m "Initial commit"
   \`\`\`
4. Create a new branch called \`feature-x\`:
   \`\`\`
   git checkout -b feature-x
   \`\`\`
5. Edit \`README.md\`, add another line, then commit on \`feature-x\`.  
6. Switch back to \`main\` (or \`master\`) and merge \`feature-x\`:
   \`\`\`
   git checkout main
   git merge feature-x
   \`\`\`
7. (Optional) Push to GitHub if you have a remote configured:
   \`\`\`
   git remote add origin https://github.com/yourusername/git-lab.git
   git push -u origin main
   \`\`\`

**Hint**: Use \`git log --oneline\` to view commits.
        `,
        embedUrl: null,
        starterRepo: null,
      },
    },
    {
      Stage: '1. Foundations',
      Topic: 'Command Line',
      Outcome: 'Using shell commands and scripting basics (bash).',
      Lab: null,
    },
    {
      Stage: '2. Programming',
      Topic: 'Bash Scripting',
      Outcome: 'Automating tasks using bash: loops, conditionals, and basic functions.',
      Lab: null,
    },
    {
      Stage: '2. Programming',
      Topic: 'Python Basics',
      Outcome: 'Writing simple automation scripts in Python for DevOps tasks.',
      Lab: null,
    },
    {
      Stage: '3. Cloud & IaC',
      Topic: 'AWS Core Services',
      Outcome: 'Using EC2, S3, IAM, VPC: provisioning and managing basic AWS resources.',
      Lab: null,
    },
    {
      Stage: '3. Cloud & IaC',
      Topic: 'Terraform',
      Outcome: 'Writing and deploying Infrastructure as Code using Terraform.',
      Lab: null,
    },
    {
      Stage: '3. Cloud & IaC',
      Topic: 'CI/CD',
      Outcome: 'Building pipelines with Jenkins or GitHub Actions for automated builds and tests.',
      Lab: null,
    },
    {
      Stage: '4. Containers',
      Topic: 'Docker',
      Outcome: 'Creating, managing, and deploying containers using Docker.',
      Lab: null,
    },
    {
      Stage: '4. Containers',
      Topic: 'Kubernetes',
      Outcome: 'Deploying and managing applications on Kubernetes clusters.',
      Lab: null,
    },
    {
      Stage: '4. Containers',
      Topic: 'Helm',
      Outcome: 'Managing Kubernetes packages with Helm charts.',
      Lab: null,
    },
    {
      Stage: '5. Monitoring',
      Topic: 'Prometheus & Grafana',
      Outcome: 'Setting up monitoring dashboards and alerts with Prometheus and Grafana.',
      Lab: null,
    },
    {
      Stage: '5. Monitoring',
      Topic: 'ELK Stack',
      Outcome: 'Centralized logging with Elasticsearch, Logstash, and Kibana.',
      Lab: null,
    },
    {
      Stage: '6. Projects',
      Topic: 'Full DevOps Project',
      Outcome: 'Automated CI/CD pipeline with Kubernetes deployment; publish on GitHub and write a project blog.',
      Lab: null,
    },
  ]

  // 4) Upsert each Step, its Lesson, and its Lab (if provided)
  for (let i = 0; i < devOpsCurriculum.length; i++) {
    const { Topic, Outcome, Lab: labData } = devOpsCurriculum[i]
    const orderIndex = i + 1

    // 4a) Upsert the Step by pathId + title
    let step = await prisma.step.findFirst({
      where: { pathId: devOpsPath.id, title: Topic },
    })
    if (!step) {
      step = await prisma.step.create({
        data: {
          pathId: devOpsPath.id,
          title: Topic,
          orderIndex: orderIndex,
        },
      })
      console.log(`Seed: Created Step [${orderIndex}] "${Topic}"`)
    } else {
      // Ensure the orderIndex is up to date
      await prisma.step.update({
        where: { id: step.id },
        data: { orderIndex: orderIndex },
      })
      console.log(`Seed: Updated Step orderIndex for "${Topic}"`)
    }

    // 4b) Upsert the Lesson for this Step
    let lesson = await prisma.lesson.findFirst({
      where: { stepId: step.id, title: Topic },
    })
    if (!lesson) {
      await prisma.lesson.create({
        data: {
          stepId: step.id,
          title: Topic,
          body: Outcome,
        },
      })
      console.log(`Seed: Created Lesson for Step "${Topic}"`)
    } else {
      await prisma.lesson.update({
        where: { id: lesson.id },
        data: { body: Outcome },
      })
      console.log(`Seed: Updated Lesson body for "${Topic}"`)
    }

    // 4c) Upsert the Lab for this Step (only if labData is non-null)
    if (labData) {
      let lab = await prisma.lab.findFirst({
        where: { stepId: step.id, title: labData.title },
      })
      if (!lab) {
        await prisma.lab.create({
          data: {
            stepId: step.id,
            title: labData.title,
            instructions: labData.instructions,
            embedUrl: labData.embedUrl,
            starterRepo: labData.starterRepo,
          },
        })
        console.log(`Seed: Created Lab "${labData.title}" for Step "${Topic}"`)
      } else {
        await prisma.lab.update({
          where: { id: lab.id },
          data: {
            instructions: labData.instructions,
            embedUrl: labData.embedUrl,
            starterRepo: labData.starterRepo,
          },
        })
        console.log(`Seed: Updated Lab "${labData.title}" for Step "${Topic}"`)
      }
    }
  }

  console.log('✅ DevOps curriculum + labs seeded successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
