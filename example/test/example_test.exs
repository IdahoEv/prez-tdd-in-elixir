defmodule ExampleTest do
  use ExUnit.Case

  test "Assert an equality" do
    assert 1 + 1 == 2
  end

  test "Asserting a pattern match" do
    foo = { 1, 2 }

    assert { 1, _ } = foo
  end

  test "Pattern match fails" do
    foo = { 1, 2 }

    assert { 2, _ } = foo   # match fails
  end


  function equals_four(arg) do
    arg == 4
  end

  test "Custom matchers are just helper functions" do
    assert equals_four(4)  # passes
    assert equals_four(5)  # fails
  end
end
