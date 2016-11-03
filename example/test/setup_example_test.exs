defmodule SetupExampleTest do
  use ExUnit.Case

  setup "whatever" do
    { :ok, file_contents } =
      File.read('mix.exs')

    [ stuff: file_contents,
      color: "red"
    ]
  end

  test "getting the fixtures", data do
    assert data[:color] == red
  end
end
