# GitHub Actions Workflows

This directory contains CI/CD workflows for the Upskills.in corporate website.

## Workflows

### 1. CI Workflow (`ci.yml`)
**Triggers**: Push to main/develop, Pull requests to main/develop

**Jobs**:
- **build-and-test**: Tests across Node.js 18.x and 20.x
  - Installs dependencies
  - TypeScript type checking
  - Production build
  - Uploads build artifacts
- **docker-build**: Validates Docker image
  - Builds multi-stage Docker image
  - Tests health endpoint

### 2. Deploy Workflow (`deploy.yml`)
**Triggers**: Push to main, Manual dispatch

**Features**:
- Production build
- Docker image creation
- Optional deployments to:
  - Vercel (configure secrets)
  - Netlify (configure secrets)
  - Docker Hub (configure secrets)

### 3. Lint Workflow (`lint.yml`)
**Triggers**: Push/PR to main/develop

**Checks**:
- ESLint code quality
- TypeScript type checking
- Project structure validation

## Setup Instructions

### Initial Setup

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Configure Secrets** (optional, for deployments):
   
   Go to Repository Settings → Secrets and variables → Actions
   
   **For Vercel**:
   - `VERCEL_TOKEN`
   - `VERCEL_ORG_ID`
   - `VERCEL_PROJECT_ID`
   
   **For Netlify**:
   - `NETLIFY_AUTH_TOKEN`
   - `NETLIFY_SITE_ID`
   
   **For Docker Hub**:
   - `DOCKER_HUB_USERNAME`
   - `DOCKER_HUB_TOKEN`

### Workflow Execution

Workflows run automatically on:
- Every push to main/develop
- Every pull request
- Manual trigger (deploy.yml)

### Viewing Results

- Go to Actions tab in GitHub
- Click on workflow run
- View job logs and artifacts

## Customization

Edit workflow files in `.github/workflows/` to:
- Add new environments
- Change Node.js versions
- Add test steps
- Modify deployment targets
- Add notifications (Slack, email)

## Best Practices

1. Always test workflows on feature branches first
2. Use environment protection rules for production deployments
3. Keep secrets secure and rotate regularly
4. Monitor workflow execution times
5. Archive old workflow runs to save storage
