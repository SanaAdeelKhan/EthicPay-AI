# test_compliance_agent.py
from src.ai.compliance_agent import check_transaction

def test_basic_compliance():
    result = check_transaction({"notes": "Halal payment"})
    assert result["compliant"] == True
