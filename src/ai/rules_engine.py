# rules_engine.py
# Logical rules engine for compliance decisions

def evaluate_rules(transaction):
    return {
        "amount_check": transaction.get("amount", 0) > 0,
        "currency_check": transaction.get("currency") == "USDC"
    }
