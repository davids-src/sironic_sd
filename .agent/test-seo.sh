#!/bin/bash

# Multilingual SEO Testing & Validation Script
# Tests all FR/IT/ES routes and validates SEO implementation

BASE_URL="${1:-http://localhost:3000}"
RESULTS_FILE="seo-validation-results.txt"

echo "========================================" | tee $RESULTS_FILE
echo "MULTILINGUAL SEO VALIDATION" | tee -a $RESULTS_FILE
echo "========================================" | tee -a $RESULTS_FILE
echo "Base URL: $BASE_URL" | tee -a $RESULTS_FILE
echo "Date: $(date)" | tee -a $RESULTS_FILE
echo "" | tee -a $RESULTS_FILE

# Color codes for terminal output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Test URLs - FR/IT/ES only
declare -a TEST_URLS=(
    # French URLs
    "/fr"
    "/fr/formation-informatique"
    "/fr/developpement-dapplications"
    "/fr/optimisation-reseau"
    "/fr/reparation-et-maintenance"
    "/fr/presence-it-sur-site"
    "/fr/produits"
    "/fr/tarifs"
    "/fr/a-propos"
    "/fr/services"
    "/fr/contact"
    
    # Italian URLs
    "/it"
    "/it/formazione-it"
    "/it/sviluppo-applicazioni"
    "/it/ottimizzazione-rete"
    "/it/riparazione-e-assistenza"
    "/it/presenza-it-onsite"
    "/it/prodotti"
    "/it/prezzi"
    "/it/chi-siamo"
    "/it/servizi"
    "/it/contatti"
    
    # Spanish URLs
    "/es"
    "/es/formacion-informatica"
    "/es/desarrollo-de-aplicaciones"
    "/es/optimizacion-de-red"
    "/es/reparacion-y-servicio"
    "/es/presencia-it-onsite"
    "/es/productos"
    "/es/precios"
    "/es/sobre-nosotros"
    "/es/servicios"
    "/es/contacto"
)

echo "========================================" | tee -a $RESULTS_FILE
echo "URL ACCESSIBILITY TEST" | tee -a $RESULTS_FILE
echo "========================================" | tee -a $RESULTS_FILE

PASS_COUNT=0
FAIL_COUNT=0

for url in "${TEST_URLS[@]}"; do
    FULL_URL="$BASE_URL$url"
    HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "$FULL_URL")
    
    if [ "$HTTP_CODE" = "200" ]; then
        echo -e "${GREEN}✓${NC} $url (HTTP $HTTP_CODE)" | tee -a $RESULTS_FILE
        ((PASS_COUNT++))
    else
        echo -e "${RED}✗${NC} $url (HTTP $HTTP_CODE)" | tee -a $RESULTS_FILE
        ((FAIL_COUNT++))
    fi
done

echo "" | tee -a $RESULTS_FILE
echo "Results: $PASS_COUNT passed, $FAIL_COUNT failed" | tee -a $RESULTS_FILE
echo "" | tee -a $RESULTS_FILE

# Hreflang Tag Validation
echo "========================================" | tee -a $RESULTS_FILE
echo "HREFLANG TAG VALIDATION" | tee -a $RESULTS_FILE
echo "========================================" | tee -a $RESULTS_FILE

# Test a sample page
SAMPLE_URL="$BASE_URL/fr/services"
echo "Testing: $SAMPLE_URL" | tee -a $RESULTS_FILE

HREFLANG_COUNT=$(curl -s "$SAMPLE_URL" | grep -o 'hrefLang=' | wc -l)
echo "Found $HREFLANG_COUNT hreflang tags" | tee -a $RESULTS_FILE

if [ "$HREFLANG_COUNT" -ge "10" ]; then
    echo -e "${GREEN}✓ Hreflang tags present (expected: 11, found: $HREFLANG_COUNT)${NC}" | tee -a $RESULTS_FILE
else
    echo -e "${RED}✗ Missing hreflang tags (expected: 11, found: $HREFLANG_COUNT)${NC}" | tee -a $RESULTS_FILE
fi

echo "" | tee -a $RESULTS_FILE

# Structured Data Validation
echo "========================================" | tee -a $RESULTS_FILE
echo "STRUCTURED DATA VALIDATION" | tee -a $RESULTS_FILE
echo "========================================" | tee -a $RESULTS_FILE

# Check for JSON-LD scripts
JSON_LD_COUNT=$(curl -s "$SAMPLE_URL" | grep -o 'application/ld+json' | wc -l)
echo "Found $JSON_LD_COUNT JSON-LD script tags" | tee -a $RESULTS_FILE

if [ "$JSON_LD_COUNT" -ge "3" ]; then
    echo -e "${GREEN}✓ Structured data present${NC}" | tee -a $RESULTS_FILE
else
    echo -e "${YELLOW}⚠ Limited structured data (found: $JSON_LD_COUNT)${NC}" | tee -a $RESULTS_FILE
fi

echo "" | tee -a $RESULTS_FILE

# Canonical Tag Validation
echo "========================================" | tee -a $RESULTS_FILE
echo "CANONICAL TAG VALIDATION" | tee -a $RESULTS_FILE
echo "========================================" | tee -a $RESULTS_FILE

CANONICAL_PRESENT=$(curl -s "$SAMPLE_URL" | grep -o 'rel="canonical"' | wc -l)

if [ "$CANONICAL_PRESENT" -gt "0" ]; then
    echo -e "${GREEN}✓ Canonical tag present${NC}" | tee -a $RESULTS_FILE
else
    echo -e "${RED}✗ Canonical tag missing${NC}" | tee -a $RESULTS_FILE
fi

echo "" | tee -a $RESULTS_FILE

# Meta Tags Validation
echo "========================================" | tee -a $RESULTS_FILE
echo "META TAGS VALIDATION" | tee -a $RESULTS_FILE
echo "========================================" | tee -a $RESULTS_FILE

# Check for essential meta tags
OG_TITLE=$(curl -s "$SAMPLE_URL" | grep -o 'property="og:title"' | wc -l)
OG_DESC=$(curl -s "$SAMPLE_URL" | grep -o 'property="og:description"' | wc -l)
OG_TYPE=$(curl -s "$SAMPLE_URL" | grep -o 'property="og:type"' | wc -l)

echo "OpenGraph Tags:" | tee -a $RESULTS_FILE
echo "  - og:title: $OG_TITLE" | tee -a $RESULTS_FILE
echo "  - og:description: $OG_DESC" | tee -a $RESULTS_FILE
echo "  - og:type: $OG_TYPE" | tee -a $RESULTS_FILE

if [ "$OG_TITLE" -gt "0" ] && [ "$OG_DESC" -gt "0" ] && [ "$OG_TYPE" -gt "0" ]; then
    echo -e "${GREEN}✓ All essential OG tags present${NC}" | tee -a $RESULTS_FILE
else
    echo -e "${YELLOW}⚠ Some OG tags missing${NC}" | tee -a $RESULTS_FILE
fi

echo "" | tee -a $RESULTS_FILE

# Summary
echo "========================================" | tee -a $RESULTS_FILE
echo "VALIDATION SUMMARY" | tee -a $RESULTS_FILE
echo "========================================" | tee -a $RESULTS_FILE
echo "Total URLs Tested: ${#TEST_URLS[@]}" | tee -a $RESULTS_FILE
echo "Passed: $PASS_COUNT" | tee -a $RESULTS_FILE
echo "Failed: $FAIL_COUNT" | tee -a $RESULTS_FILE

SUCCESS_RATE=$((PASS_COUNT * 100 / ${#TEST_URLS[@]}))
echo "Success Rate: $SUCCESS_RATE%" | tee -a $RESULTS_FILE

if [ "$SUCCESS_RATE" -eq "100" ]; then
    echo -e "${GREEN}✓ ALL TESTS PASSED${NC}" | tee -a $RESULTS_FILE
elif [ "$SUCCESS_RATE" -ge "90" ]; then
    echo -e "${YELLOW}⚠ MOSTLY PASSING (>90%)${NC}" | tee -a $RESULTS_FILE
else
    echo -e "${RED}✗ TESTS FAILED (<90%)${NC}" | tee -a $RESULTS_FILE
fi

echo "" | tee -a $RESULTS_FILE
echo "Full results saved to: $RESULTS_FILE" | tee -a $RESULTS_FILE
echo "========================================" | tee -a $RESULTS_FILE

# Recommendations
echo "" | tee -a $RESULTS_FILE
echo "NEXT STEPS:" | tee -a $RESULTS_FILE
echo "1. Fix any 404 errors" | tee -a $RESULTS_FILE
echo "2. Submit sitemap to Google Search Console" | tee -a $RESULTS_FILE
echo "3. Test with Google Rich Results Test: https://search.google.com/test/rich-results" | tee -a $RESULTS_FILE
echo "4. Monitor indexing for FR/IT/ES pages" | tee -a $RESULTS_FILE
echo "5. Run Lighthouse SEO audit" | tee -a $RESULTS_FILE
