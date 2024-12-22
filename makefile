# =============================================================================
# NX Strap Development Makefile
# =============================================================================

.PHONY: help install clean dev test lint build serve-all e2e testsuite

# Default target when just running 'make'
.DEFAULT_GOAL := help

# Colors for terminal output
BLUE := \033[36m
GREEN := \033[32m
YELLOW := \033[33m
RESET := \033[0m

# Help command to list all available targets
help:
	@echo "$(BLUE)NX Strap Development Commands:$(RESET)"
	@echo "$(GREEN)make install$(RESET)    - Install all dependencies"
	@echo "$(GREEN)make clean$(RESET)      - Clean build artifacts and dependencies"
	@echo "$(GREEN)make dev$(RESET)        - Start development servers"
	@echo "$(GREEN)make test$(RESET)       - Run all tests"
	@echo "$(GREEN)make lint$(RESET)       - Run linting"
	@echo "$(GREEN)make build$(RESET)      - Build all applications"
	@echo "$(GREEN)make serve-all$(RESET)  - Serve all applications"
	@echo "$(GREEN)make e2e$(RESET)        - Run end-to-end tests"
	@echo "$(GREEN)make testsuite$(RESET)  - Run all test jobs (test, lint, e2e)"

# Install dependencies
install:
	@echo "$(BLUE)Installing dependencies...$(RESET)"
	pnpm install

# Clean build artifacts and dependencies
clean:
	@echo "$(BLUE)Cleaning project...$(RESET)"
	rm -rf node_modules
	rm -rf dist
	rm -rf .next
	rm -rf out
	pnpm exec nx reset

# Start development servers
dev:
	@echo "$(BLUE)Starting development servers...$(RESET)"
	pnpm exec nx run-many --target=serve --projects=frontend,ApiGateway --parallel=2

# Run all tests
test:
	@echo "$(BLUE)Running tests...$(RESET)"
	pnpm exec nx run-many --target=test --all

# Run linting
lint:
	@echo "$(BLUE)Running linting...$(RESET)"
	pnpm exec nx run-many --target=lint --all

# Build all applications
build:
	@echo "$(BLUE)Building all applications...$(RESET)"
	pnpm exec nx run-many --target=build --all

# Serve all applications
serve-all:
	@echo "$(BLUE)Serving all applications...$(RESET)"
	pnpm exec nx run-many --target=serve --all --parallel=2

# Run end-to-end tests
e2e:
	@echo "$(BLUE)Running end-to-end tests...$(RESET)"
	pnpm exec nx run-many --target=e2e --projects=frontend-e2e,api-gateway-e2e

# Run all test jobs
testsuite:
	@echo "$(BLUE)Running complete test suite...$(RESET)"
	@echo "$(YELLOW)Step 1/3: Running unit tests$(RESET)"
	@make test
	@echo "$(YELLOW)Step 2/3: Running linting$(RESET)"
	@make lint
	@echo "$(YELLOW)Step 3/3: Running end-to-end tests$(RESET)"
	@make e2e
	@echo "$(GREEN)Test suite completed!$(RESET)"
