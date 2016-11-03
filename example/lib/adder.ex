defmodule Adder do

  @doc """
  Adds two numbers.

  ## examples
  iex> Adder.add_two(1, 4)
  5
  iex> Adder.add_two(0.5, -3)
  -2.5
  """
  def add_two(a, b) do
    a + b
  end
end
