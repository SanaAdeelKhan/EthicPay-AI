# compliance_agent.py
# AI module for ethical transaction compliance analysis

def check_transaction(transaction_data):
    """
    Analyze transaction data for Shariah and ethical compliance.
    """
    rules = ["No Interest (Riba)", "No Gambling (Maisir)", "No Uncertainty (Gharar)"]
    result = {"compliant": True, "violations": []}

    for rule in rules:
        if rule.lower() in transaction_data.get("notes", "").lower():
            result["compliant"] = False
            result["violations"].append(rule)
    return result
